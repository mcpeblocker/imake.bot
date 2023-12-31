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
  procedure: {
    type: Types.ObjectId,
    ref: "Procedure",
  },
});

export const ActionEntity = model<IAction>("Action", actionSchema, "actions");
