import { IChatBot } from "../ChatBot/interfaces";

type ApiMethodSendMessage = "sendMessage";
type ApiParamsSendMessage = {
  chat_id: string | number;
  text: string;
};

type ApiMethodSetMyName = "setMyName";
type ApiParamsSetMyName = {
  name: string;
};

export type IAction = {
  chatbot: IChatBot;
} & (
  | {
      method: ApiMethodSendMessage;
      params: ApiParamsSendMessage;
    }
  | {
      method: ApiMethodSetMyName;
      params: ApiParamsSetMyName;
    }
);
