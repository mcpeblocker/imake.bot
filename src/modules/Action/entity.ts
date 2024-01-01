import { Schema, Types, model } from "mongoose";
import { IAction } from "./interface";

const actionSchema = new Schema<IAction>({
  method: {
    type: String,
    required: true,
  },
  params: {
    type: Object,
    default: {},
  },
  chatbot: {
    type: Types.ObjectId,
    ref: "ChatBot",
    required: true,
  },
});

export const ActionEntity = model<IAction>("Action", actionSchema, "actions");
