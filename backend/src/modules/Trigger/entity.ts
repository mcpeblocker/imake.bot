import { Schema, Types, model } from "mongoose";
import { ETriggerType, ITrigger } from "./interface";

const triggerSchema = new Schema<ITrigger>({
  type: {
    type: String,
    enum: ETriggerType,
    required: true,
  },
  pattern: {
    type: String,
    required: true,
  },
  procedure: {
    type: Types.ObjectId,
    ref: "Procedure",
    required: true,
  },
  chatbot: {
    type: Types.ObjectId,
    ref: "ChatBot",
    required: true,
  },
});

export const TriggerEntity = model<ITrigger>(
  "Trigger",
  triggerSchema,
  "triggers"
);
