import { baseApiUrl } from "@/api/common/constants";
import { IAction } from "./interface";
import { ResponseBody } from "@/api/common/interface";

export const getActionsByChatbot = async (
  chatbotId: string
): Promise<IAction[]> => {
  const response = await fetch(`${baseApiUrl}/action?chatbot=${chatbotId}`, {
    next: {
      tags: ["actions"],
    },
  });
  const { code, data }: ResponseBody<IAction[]> = await response.json();
  if (code === 200) {
    return data;
  } else {
    throw new Error("Failed to get actions.");
  }
};
