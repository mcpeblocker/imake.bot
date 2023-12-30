import { Schema, model } from "mongoose";
import { IChatBot } from "./interfaces";

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
    required: true,
  },
  tg_description: {
    type: String,
  },
  tg_about: {
    type: String,
  },
  tg_username: {
    type: String,
    required: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export const ChatBotEntity = model<IChatBot>("ChatBot", chatBotSchema, "chat_bots");
