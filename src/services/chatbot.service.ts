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
}

export const chatBotService = new ChatBotService();
