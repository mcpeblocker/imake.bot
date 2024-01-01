import { ApiMethods } from "grammy/types";
import { IChatBot } from "../ChatBot/interfaces";

type ApiMethod = keyof ApiMethods;

// type ApiParams = Parameters<ApiMethods[ApiMethod]>[any];
type ApiParams = Record<string, any>;

export interface IAction {
  method: ApiMethod;
  params: ApiParams;
  chatbot: IChatBot;
}
