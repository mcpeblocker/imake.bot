import { baseApiUrl } from "@/api/common/constants";
import { ITrigger } from "./interface";
import { ResponseBody } from "@/api/common/interface";

export const getTriggerById = async (id: string): Promise<ITrigger> => {
  const response = await fetch(`${baseApiUrl}/trigger/${id}`, {
    next: {
      tags: ["triggers"],
    },
  });
  const { code, data }: ResponseBody<ITrigger> = await response.json();
  if (code === 200) {
    return data;
  } else {
    throw new Error("Failed to get trigger.");
  }
};
