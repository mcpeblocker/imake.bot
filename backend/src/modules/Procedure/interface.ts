import { IAction } from "../Action/interface";
import { IChatBot } from "../ChatBot/interfaces";

export interface IProcedure {
  chatbot: IChatBot;
  steps: IAction[];
}
