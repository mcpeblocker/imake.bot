import { Schema, model } from "mongoose";
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
});

export const ActionEntity = model<IAction>("Action", actionSchema, "actions");
