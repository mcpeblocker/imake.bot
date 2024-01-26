import { IAction } from "@/api/modules/action/interface";
import { IProcedure } from "@/api/modules/procedure/interface";
import { ITrigger } from "@/api/modules/trigger/interface";

export function instanceOfTrigger(object: Object): object is ITrigger {
  return "pattern" in object;
}
export function instanceOfProcedure(object: Object): object is IProcedure {
  return "name" in object;
}
export function instanceOfAction(object: Object): object is IAction {
  return "method" in object;
}
