import { baseApiUrl, userId } from "@/api/common/constants";
import { IChatBot } from "./interface";
import { ResponseBody } from "@/api/common/interface";

export const getChatbotById = async (id: string): Promise<IChatBot> => {
  const response = await fetch(`${baseApiUrl}/chatbot/${id}?user=${userId}`, {
    next: {
      tags: ["chatbots"],
    },
  });
  const { code, data }: ResponseBody<IChatBot> = await response.json();
  if (code === 200) {
    return data;
  } else {
    throw new Error("Failed to get chatbot by id.");
  }
};
