import { Api, Bot } from "grammy";
import { ITgBotInfo } from "../modules/ChatBot/interfaces";
import { ETriggerType, ITrigger } from "../modules/Trigger/interface";

export class ChatBotModel {
  private readonly token: string;
  private readonly bot: Bot;
  public readonly api: Api;
  public botInfo!: ITgBotInfo;

  constructor(token: string) {
    this.token = token;
    this.bot = new Bot(this.token);
    this.api = this.bot.api;
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

  public async registerTrigger(trigger: ITrigger) {
    const {
      procedure: { steps },
    } = trigger;
    switch (trigger.type) {
      case ETriggerType.COMMAND:
        this.bot.command(trigger.pattern, (ctx) => {
          ctx.reply(`Hi I detected a command!`);
          for (let step of steps) {
            switch (step.method) {
              case "sendMessage":
                ctx.api.sendMessage(step.params!.chat_id, step.params!.text);
                break;
            }
          }
        });
        break;
      case ETriggerType.TEXT:
        this.bot.hears(trigger.pattern, (ctx) => {
          ctx.reply(`Hi I detected a text!`);
          for (let step of steps) {
            switch (step.method) {
              case "sendMessage":
                ctx.api.sendMessage(step.params!.chat_id, step.params!.text);
                break;
            }
          }
        });
        break;
    }
    this.bot.start();
  }
}
