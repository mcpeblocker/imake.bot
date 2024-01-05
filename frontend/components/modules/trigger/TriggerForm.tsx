"use client";

import { ITrigger } from "@/api/modules/trigger/interface";
import { Button, FormControl, Stack } from "@mui/joy";
import { useMemo, useState } from "react";
import TriggerType from "./TriggerType";
import TriggerPattern from "./TriggerPattern";
import TriggerProcedure from "./TriggerProcedure";
import { IProcedure } from "@/api/modules/procedure/interface";
import { useRouter } from "next/navigation";

interface TriggerFormProps {
  trigger?: ITrigger;
  procedures: IProcedure[];
  chatbotId: string;
  onSave: (
    data: {
      triggerId: string;
    } & Pick<ITrigger, "type" | "pattern" | "procedure" | "chatbot">
  ) => Promise<ITrigger>;
}

export function TriggerForm(props: TriggerFormProps) {
  const defaultTrigger = {
    type: props.trigger?.type || "",
    pattern: props.trigger?.pattern || "",
    procedure: props.trigger?.procedure || "",
  };

  const router = useRouter();
  const [type, setType] = useState<string>(defaultTrigger.type);
  const [pattern, setPattern] = useState<string>(defaultTrigger.pattern);
  const [procedure, setProcedure] = useState<string>(defaultTrigger.procedure);

  const isNotChanged = useMemo(
    () =>
      defaultTrigger.type === type &&
      defaultTrigger.pattern === pattern &&
      defaultTrigger.procedure === procedure,
    [defaultTrigger, type, pattern, procedure]
  );

  const submitForm = async () => {
    const result = await props.onSave({
      type,
      pattern,
      procedure,
      chatbot: props.chatbotId,
      triggerId: props.trigger?._id || "",
    });
    if (props.trigger?._id == undefined) {
      router.push(
        `/dashboard/chatbot/${props.chatbotId}/trigger/${result._id}`
      );
    }
  };

  return (
    <Stack gap={2} mt={2}>
      {/* Type */}
      <TriggerType defaultType={defaultTrigger.type} onChange={setType} />
      {/* Pattern */}
      <TriggerPattern
        defaultPattern={defaultTrigger.pattern}
        onChange={setPattern}
      />
      {/* Procedure */}
      <TriggerProcedure
        defaultProcedureId={defaultTrigger.procedure}
        procedures={props.procedures}
        onChange={setProcedure}
        chatbotId={props.chatbotId}
      />
      <FormControl>
        <Button disabled={isNotChanged} color="success" onClick={submitForm}>
          Save
        </Button>
      </FormControl>
    </Stack>
  );
}
