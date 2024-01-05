import { IAction } from "../Action/interface";
import { IChatBot } from "../ChatBot/interfaces";

export interface IProcedure {
  name: string;
  chatbot: IChatBot;
  steps: IAction[];
}
