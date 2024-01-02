import { ChatBotEntity } from "../modules/ChatBot/entity";
import { ChatBotModel } from "./chatbot.model";

class ChatBotService {
  private readonly chatbots: ChatBotModel[];

  constructor() {
    this.chatbots = [];
  }

  public async getChatBot(token: string): Promise<ChatBotModel> {
    let chatbot = this.chatbots.find((item) => item.botInfo.tg_token == token);
    if (chatbot) {
      return chatbot;
    } else {
      chatbot = new ChatBotModel(token);
      await chatbot.init();
      this.chatbots.push(chatbot);
      return chatbot;
    }
  }

  public async launchChatBot(token: string) {
    const chatbot = await this.getChatBot(token);
    chatbot.launch();
  }

  public async terminateChatBot(token: string) {
    const chatBotIndex = this.chatbots.findIndex(
      (chatBot) => chatBot.botInfo.tg_token === token
    );
    const chatbots = this.chatbots.splice(chatBotIndex, 1);
    if (chatbots[0]) {
      chatbots[0].terminate();
    }
  }

  public async launchAll() {
    const chatbots = await ChatBotEntity.find();
    for (let chatbot of chatbots) {
      await this.launchChatBot(chatbot.tg_token);
    }
  }
}

export const chatBotService = new ChatBotService();
