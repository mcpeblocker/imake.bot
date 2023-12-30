import { Types } from "mongoose";

export interface ITgBotInfo {
  tg_token: string;
  tg_name: string;
  tg_description: string;
  tg_about: string;
  tg_username: string;
}

export interface IChatBot extends ITgBotInfo {
  name: string;
  owner: Types.ObjectId;
}
