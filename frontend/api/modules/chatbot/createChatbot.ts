"use server";

import { baseApiUrl, userId } from "@/api/common/constants";
import { IChatBot } from "./interface";
import { ResponseBody } from "@/api/common/interface";
import { revalidateTag } from "next/cache";

export const createChatbot = async ({
  name,
  tg_token,
}: Pick<IChatBot, "name" | "tg_token">) => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  const response = await fetch(`${baseApiUrl}/chatbot?user=${userId}`, {
    method: "POST",
    headers,
    body: JSON.stringify({ name, tg_token }),
    cache: "no-store",
  });
  const { code, data }: ResponseBody<IChatBot> = await response.json();
  if (code === 200) {
    revalidateTag("chatbots");
    return data;
  } else {
    throw new Error("Failed to create chatbot.");
  }
};
