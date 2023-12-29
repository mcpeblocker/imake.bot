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
    required: true,
  },
  tg_about: {
    type: String,
    required: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export const ChatBot = model<IChatBot>("ChatBot", chatBotSchema, "chat_bots");
