import { IAction } from "./action/interface";
import { IProcedure } from "./procedure/interface";
import { ITrigger } from "./trigger/interface";

export enum EntityType {
  TRIGGER = "trigger",
  PROCEDURE = "procedure",
  ACTION = "action",
}

export type IEntity = (ITrigger | IProcedure | IAction) & {
  entityType: EntityType;
};
