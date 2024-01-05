"use server";

import { baseApiUrl } from "@/api/common/constants";
import { IAction } from "./interface";
import { ResponseBody } from "@/api/common/interface";
import { revalidateTag } from "next/cache";

export const createAction = async ({
  method,
  params,
  chatbot,
}: Pick<IAction, "method" | "params" | "chatbot">) => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  const response = await fetch(`${baseApiUrl}/action`, {
    method: "POST",
    headers,
    body: JSON.stringify({ method, params, chatbot }),
    cache: "no-store",
  });
  const { code, data }: ResponseBody<IAction> = await response.json();
  if (code === 200) {
    revalidateTag("actions");
    return data;
  } else {
    throw new Error("Failed to create action.");
  }
};
