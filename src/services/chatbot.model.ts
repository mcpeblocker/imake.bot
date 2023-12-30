import { Api, Bot } from "grammy";
import { ITgBotInfo } from "../modules/ChatBot/interfaces";

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
}
