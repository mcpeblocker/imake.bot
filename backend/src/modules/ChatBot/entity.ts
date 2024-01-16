import { Schema, model } from "mongoose";
import { IChatBot } from "./interfaces";
import { chatBotService } from "../../services/chatbot.service";
import { logger } from "../../common/logger";

const chatBotSchema = new Schema<IChatBot>({
  name: {
    type: String,
    required: true,
  },
  tg_token: {
    type: String,
    required: true,
  },
  tg_name: {
    type: String,
    // required: true,
  },
  tg_description: {
    type: String,
  },
  tg_about: {
    type: String,
  },
  tg_username: {
    type: String,
    // required: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

chatBotSchema.pre("save", async function (next) {
  const chatbotModel = await chatBotService.getChatBot(this.tg_token);
  this.tg_about = chatbotModel.botInfo.tg_about;
  this.tg_description = chatbotModel.botInfo.tg_description;
  this.tg_name = chatbotModel.botInfo.tg_name;
  this.tg_username = chatbotModel.botInfo.tg_username;
  next();
});

chatBotSchema.post("save", async function (res, next) {
  try {
    await chatBotService.launchChatBot(res.tg_token);
    next();
  } catch (error: any) {
    logger.error("ChatBot service error received.", {
      message: error.message,
      error,
    });
  }
});

chatBotSchema.post("findOneAndDelete", async function (res, next) {
  await chatBotService.terminateChatBot(res.tg_token);
});

export const ChatBotEntity = model<IChatBot>(
  "ChatBot",
  chatBotSchema,
  "chat_bots"
);
