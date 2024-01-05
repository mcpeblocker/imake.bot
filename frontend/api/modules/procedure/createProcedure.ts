"use server";

import { baseApiUrl } from "@/api/common/constants";
import { IProcedure } from "./interface";
import { ResponseBody } from "@/api/common/interface";
import { revalidateTag } from "next/cache";

export const createProcedure = async ({
  name,
  steps,
  chatbot,
}: Pick<IProcedure, "name" | "steps" | "chatbot">) => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  const response = await fetch(`${baseApiUrl}/procedure`, {
    method: "POST",
    headers,
    body: JSON.stringify({ name, steps, chatbot }),
    cache: "no-store",
  });
  const { code, data }: ResponseBody<IProcedure> = await response.json();
  if (code === 200) {
    revalidateTag("procedures");
    return data;
  } else {
    throw new Error("Failed to create procedure.");
  }
};
