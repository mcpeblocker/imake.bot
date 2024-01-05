"use client";

import { IProcedure } from "@/api/modules/procedure/interface";
import { Button, FormControl, Stack } from "@mui/joy";
import { useMemo, useState } from "react";
import { ProcedureSteps } from "./ProcedureSteps";
import { IAction } from "@/api/modules/action/interface";
import ProcedureName from "./ProcedureName";
import { useRouter } from "next/navigation";

interface ProcedureFormProps {
  chatbotId: string;
  procedure?: IProcedure;
  actions: IAction[];
  onSave: (data: {
    procedureId: string;
    name: string;
    steps: string[];
    chatbot: string;
  }) => Promise<IProcedure>;
}

export function ProcedureForm(props: ProcedureFormProps) {
  const defaultProcedure = {
    name: props.procedure?.name || "",
    steps: props.procedure?.steps || [],
  };

  const router = useRouter();
  const [name, setName] = useState(defaultProcedure.name);
  const [steps, setSteps] = useState<string[]>(defaultProcedure.steps);

  const isNotChanged = useMemo(
    () =>
      defaultProcedure.name === name &&
      JSON.stringify(defaultProcedure.steps) === JSON.stringify(steps),
    [defaultProcedure, name, steps]
  );

  const addEmptyStep = () => {
    const newSteps = [...steps, ""];
    setSteps(newSteps);
  };

  const removeStep = (index: number) => {
    const newSteps = [...steps];
    newSteps.splice(index, 1);
    setSteps(newSteps);
  };

  const handleStepChange = (index: number, step: string) => {
    const newSteps = [...steps];
    newSteps.splice(index, 1, step);
    setSteps(newSteps);
  };

  const submitForm = async () => {
    const result = await props.onSave({
      name,
      steps,
      chatbot: props.chatbotId,
      procedureId: props.procedure?._id || "",
    });
    if (props.procedure?._id === undefined) {
      router.push(result._id);
    }
  };

  return (
    <Stack gap={2} mt={2}>
      <ProcedureName defaultName={defaultProcedure.name} onChange={setName} />
      <ProcedureSteps
        chatbotId={props.chatbotId}
        steps={steps}
        actions={props.actions}
        onChange={setSteps}
        onAddStep={addEmptyStep}
        onRemoveStep={removeStep}
        onStepChange={handleStepChange}
      />
      <FormControl>
        <Button disabled={isNotChanged} color="success" onClick={submitForm}>
          Save
        </Button>
      </FormControl>
    </Stack>
  );
}
