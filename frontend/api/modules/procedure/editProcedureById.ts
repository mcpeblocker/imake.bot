"use server";

import { baseApiUrl } from "@/api/common/constants";
import { IProcedure } from "./interface";
import { ResponseBody } from "@/api/common/interface";
import { revalidateTag } from "next/cache";

export const editProcedureById = async ({
  procedureId,
  name,
  steps,
}: { procedureId: string } & Pick<IProcedure, "name" | "steps">) => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  const response = await fetch(`${baseApiUrl}/procedure/${procedureId}`, {
    method: "PUT",
    headers,
    body: JSON.stringify({ name, steps }),
    cache: "no-store",
  });
  const { code, data }: ResponseBody<IProcedure> = await response.json();
  if (code === 200) {
    revalidateTag("procedures");
    return data;
  } else {
    throw new Error("Failed to update procedure.");
  }
};
