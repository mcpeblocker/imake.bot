import { Schema, Types, model } from "mongoose";

interface IChatBot {
  name: string;
  tg_token: string;
  tg_name: string;
  tg_description: string;
  tg_about: string;
  owner: Types.ObjectId;
}

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
