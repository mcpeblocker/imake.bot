import { Api, Bot } from "grammy";
import { ITgBotInfo } from "../modules/ChatBot/interfaces";
import { ETriggerType } from "../modules/Trigger/interface";
import { TriggerEntity } from "../modules/Trigger/entity";
import { PipelineStage } from "mongoose";
import { IAction } from "../modules/Action/interface";

export class ChatBotModel {
  private readonly token: string;
  private readonly bot: Bot;
  public readonly api: Api;
  public botInfo!: ITgBotInfo;
  public isLaunched: boolean;

  constructor(token: string) {
    this.token = token;
    this.bot = new Bot(this.token);
    this.api = this.bot.api;
    this.isLaunched = false;
  }

  public async init() {
    await this.bot.init();
    const { username } = this.bot.botInfo;
    const { name } = await this.api.getMyName();
    const { description } = await this.api.getMyDescription();
    const { short_description } = await this.api.getMyShortDescription();
    this.botInfo = {
      tg_name: name,
      tg_about: short_description,
      tg_description: description,
      tg_username: username,
      tg_token: this.token,
    };
  }

  private async executeAction(action: IAction) {
    switch (action.method) {
      case "sendMessage":
        await this.bot.api.sendMessage(
          action.params.chat_id,
          action.params.text
        );
        break;
      case "setMyName":
        await this.bot.api.setMyName(action.params.name);
        break;
    }
  }

  private async registerMiddlewares() {
    this.bot.on("::bot_command", async (ctx) => {
      const commands = ctx
        .entities("bot_command")
        .map((entity) => entity.text.slice(1));
      const aggregation: PipelineStage[] = [
        {
          $match: {
            $or: commands.map((command) => ({
              type: ETriggerType.COMMAND,
              pattern: command,
            })),
          },
        },
        {
          $lookup: {
            from: "chat_bots",
            localField: "chatbot",
            foreignField: "_id",
            as: "chatbot",
          },
        },
        {
          $unwind: {
            path: "$chatbot",
          },
        },
        {
          $match: {
            "chatbot.tg_token": this.token,
          },
        },
        {
          $lookup: {
            from: "procedures",
            localField: "procedure",
            foreignField: "_id",
            as: "procedure",
          },
        },
        {
          $unwind: {
            path: "$procedure",
          },
        },
        {
          $lookup: {
            from: "actions",
            localField: "procedure.steps",
            foreignField: "_id",
            as: "procedure.steps",
          },
        },
      ];
      const triggers = await TriggerEntity.aggregate(aggregation);
      for (let trigger of triggers) {
        for (let step of trigger.procedure.steps) {
          await this.executeAction(step);
        }
      }
    });
  }

  public launch() {
    this.registerMiddlewares();
    this.isLaunched = true;
    this.bot.start();
  }

  public terminate() {
    this.isLaunched = false;
    this.bot.stop();
  }
}
