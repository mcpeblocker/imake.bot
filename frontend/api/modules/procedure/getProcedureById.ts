import { baseApiUrl } from "@/api/common/constants";
import { IProcedure } from "./interface";
import { ResponseBody } from "@/api/common/interface";

export const getProcedureById = async (id: string): Promise<IProcedure> => {
  const response = await fetch(`${baseApiUrl}/procedure/${id}`, {
    next: {
      tags: ["procedures"],
    },
  });
  const { code, data }: ResponseBody<IProcedure> = await response.json();
  if (code === 200) {
    return data;
  } else {
    throw new Error("Failed to get procedure.");
  }
};
