import {
  Autocomplete,
  Button,
  FormControl,
  FormLabel,
  Link,
  Stack,
  Typography,
} from "@mui/joy";
import { useState } from "react";
import NextLink from "next/link";

interface ProcedureStepsProps {
  chatbotId: string;
  defaultSteps: string[];
  onChange: (steps: string[]) => void;
}

export function ProcedureSteps(props: ProcedureStepsProps) {
  const actions = [
    "6592e49f12f9003fa2276e8d",
    "6592e49f12f9003fa2276e8c",
    "6592e49f12f9003fa2276e8b",
  ];

  const [steps, setSteps] = useState<string[]>(props.defaultSteps);

  const addEmptyStep = () => {
    const newSteps = [...steps, ""];
    setSteps(newSteps);
    props.onChange(newSteps);
  };

  const removeStep = (index: number) => {
    const newSteps = [...steps];
    newSteps.splice(index, 1);
    setSteps(newSteps);
    props.onChange(newSteps);
  };

  const handleStepChange = (index: number, step: string) => {
    const newSteps = [...steps];
    newSteps.splice(index, 1, step);
    setSteps(newSteps);
    props.onChange(newSteps);
  };

  return (
    <Stack gap={2}>
      <FormLabel>Steps</FormLabel>
      {steps.map((step, index) => (
        <Stack key={index} direction="row" alignItems="center" gap={2}>
          <Typography>{index + 1}.</Typography>
          <FormControl sx={{ width: "100%" }}>
            <Autocomplete
              placeholder="Choose an action"
              defaultValue={{ label: step, id: step }}
              options={actions.map((item) => ({
                label: item,
                id: item,
              }))}
              onChange={(_, value) =>
                handleStepChange(index, value?.id as string)
              }
            />
          </FormControl>
          <Link
            component={NextLink}
            href={`/dashboard/chatbot/${props.chatbotId}/action/${step}`}
            underline="none"
          >
            <Button>Details</Button>
          </Link>
          <Button color="danger" onClick={() => removeStep(index)}>
            Remove
          </Button>
        </Stack>
      ))}
      <FormControl>
        <Button onClick={addEmptyStep}>+ Add step</Button>
      </FormControl>
    </Stack>
  );
}
