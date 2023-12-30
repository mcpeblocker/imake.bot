import { Types } from "mongoose";

export interface IChatBot {
  name: string;
  tg_token: string;
  tg_name: string;
  tg_description: string;
  tg_about: string;
  tg_username: string;
  owner: Types.ObjectId;
}
