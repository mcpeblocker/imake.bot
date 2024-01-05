import { Schema, Types, model } from "mongoose";
import { IProcedure } from "./interface";

const procedureSchema = new Schema<IProcedure>({
  name: {
    type: String,
    required: true
  },
  chatbot: {
    type: Types.ObjectId,
    required: true,
  },
  steps: [
    {
      type: Types.ObjectId,
    },
  ],
});

export const ProcedureEntity = model<IProcedure>(
  "Procedure",
  procedureSchema,
  "procedures"
);
