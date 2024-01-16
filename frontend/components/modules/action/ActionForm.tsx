"use client";

import { IAction } from "@/api/modules/action/interface";
import { Button, FormControl, Stack } from "@mui/joy";
import { useMemo, useState } from "react";
import { ActionMethod } from "./ActionMethod";
import { ActionParams } from "./ActionParams";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface ActionFormProps {
  action?: IAction;
  chatbotId: string;
  onSave: (
    data: { actionId: string } & Pick<IAction, "method" | "params" | "chatbot">
  ) => Promise<IAction>;
}

export function ActionForm(props: ActionFormProps) {
  const defaultAction = useMemo(
    () => ({
      method: props.action?.method || "sendMessage",
      params: props.action?.params || {
        chat_id: 123456789,
        text: "Hello world",
      },
    }),
    [props]
  );

  const router = useRouter();
  const [method, setMethod] = useState(defaultAction.method);
  const [params, setParams] = useState(JSON.stringify(defaultAction.params));
  const [isLoading, setIsLoading] = useState(false);

  const isNotChanged = useMemo(
    () =>
      defaultAction.method === method &&
      JSON.stringify(defaultAction.params) === params,
    [defaultAction, method, params]
  );

  const submitForm = async () => {
    setIsLoading(true);
    const result = await props.onSave({
      method,
      params: JSON.parse(params),
      chatbot: props.chatbotId,
      actionId: props.action?._id || "",
    });
    setIsLoading(false);
    toast.success("Action has been saved!");
    if (props.action?._id === undefined) {
      router.push(`/dashboard/chatbot/${props.chatbotId}/action/${result._id}`);
    }
  };

  return (
    <Stack gap={2} mt={2}>
      {/* Method */}
      <ActionMethod defaultMethod={defaultAction.method} onChange={setMethod} />
      {/* Params */}
      <ActionParams
        defaultParams={JSON.stringify(defaultAction.params)}
        onChange={setParams}
      />
      <FormControl>
        <Button
          disabled={isNotChanged}
          color="success"
          onClick={submitForm}
          loading={isLoading}
        >
          Save
        </Button>
      </FormControl>
    </Stack>
  );
}
