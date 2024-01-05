"use server";

import { baseApiUrl } from "@/api/common/constants";
import { ITrigger } from "./interface";
import { ResponseBody } from "@/api/common/interface";
import { revalidateTag } from "next/cache";

export const editTriggerById = async ({
  triggerId,
  type,
  pattern,
  procedure,
}: { triggerId: string } & Pick<
  ITrigger,
  "type" | "pattern" | "procedure"
>) => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  const response = await fetch(`${baseApiUrl}/trigger/${triggerId}`, {
    method: "PUT",
    headers,
    body: JSON.stringify({ type, pattern, procedure }),
    cache: "no-store",
  });
  const { code, data }: ResponseBody<ITrigger> = await response.json();
  if (code === 200) {
    revalidateTag("triggers");
    return data;
  } else {
    throw new Error("Failed to update trigger.");
  }
};
