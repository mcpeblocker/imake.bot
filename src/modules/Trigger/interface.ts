import { IProcedure } from "../Procedure/interface";

export enum ETriggerType {
  COMMAND = "command",
  TEXT = "text",
}

export type TPattern = string;

export interface ITrigger {
  type: ETriggerType;
  pattern: TPattern;
  procedure: IProcedure;
}
