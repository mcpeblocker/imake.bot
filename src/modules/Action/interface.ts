import { ApiMethods } from "grammy/types";
import { IProcedure } from "../Procedure/interface";

type ApiMethod = keyof ApiMethods;

type ApiParams = Parameters<ApiMethods[ApiMethod]>[any];

export interface IAction {
  method: ApiMethod;
  params: ApiParams;
  procedure: IProcedure;
}
