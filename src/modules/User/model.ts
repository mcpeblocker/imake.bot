import { Schema, model } from "mongoose";
import { IUser } from "./interfaces";

const userSchema = new Schema<IUser>({
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const User = model<IUser>("User", userSchema, "users");
