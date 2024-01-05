import { baseApiUrl, userId } from "@/api/common/constants";
import { IChatBot } from "./interface";
import { ResponseBody } from "@/api/common/interface";

export const getChatbots = async (): Promise<IChatBot[]> => {
  const response = await fetch(`${baseApiUrl}/chatbot/?user=${userId}`, {
    next: {
      tags: ['chatbots']
    }
  });
  const { code, data }: ResponseBody<IChatBot[]> = await response.json();
  if (code === 200) {
    return data;
  } else {
    throw new Error("Get chatbots request failed");
  }
};
