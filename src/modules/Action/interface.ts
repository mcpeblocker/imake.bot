import { ApiMethods } from "grammy/types";

type ApiMethod = keyof ApiMethods;

type ApiParams = Parameters<ApiMethods[ApiMethod]>[any];

export interface IAction {
  method: ApiMethod;
  params: ApiParams;
}
