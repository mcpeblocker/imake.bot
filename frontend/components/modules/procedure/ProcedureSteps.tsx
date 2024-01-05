import {
  Autocomplete,
  AutocompleteOption,
  Button,
  FormControl,
  FormLabel,
  Link,
  Stack,
  Typography,
} from "@mui/joy";
import NextLink from "next/link";
import { IAction } from "@/api/modules/action/interface";

interface ProcedureStepsProps {
  chatbotId: string;
  actions: IAction[];
  steps: string[];
  onChange: (steps: string[]) => void;
  onAddStep: () => void;
  onRemoveStep: (index: number) => void;
  onStepChange: (index: number, step: string) => void;
}

export function ProcedureSteps(props: ProcedureStepsProps) {
  const actionOptions = props.actions.map((item) => ({
    label: item.method,
    id: item._id,
  }));

  const getOption = (step: string) =>
    actionOptions.find((item) => item.id === step);

  return (
    <Stack gap={2}>
      <FormLabel>Steps</FormLabel>
      {props.steps.map((step, index) => (
        <Stack key={index} direction="row" alignItems="center" gap={2}>
          <Typography>{index + 1}.</Typography>
          <FormControl sx={{ width: "100%" }}>
            <Autocomplete
              placeholder="Choose an action"
              value={getOption(step) || null}
              options={actionOptions}
              onChange={(_, value) =>
                props.onStepChange(index, value?.id as string)
              }
              isOptionEqualToValue={(option, value) => option.id === value.id}
              renderOption={(props, option) => (
                <AutocompleteOption {...props} key={option.id}>
                  {option.label}
                </AutocompleteOption>
              )}
            />
          </FormControl>
          <Link
            component={NextLink}
            href={`/dashboard/chatbot/${props.chatbotId}/action/${step}`}
            underline="none"
          >
            <Button>Details</Button>
          </Link>
          <Button color="danger" onClick={() => props.onRemoveStep(index)}>
            Remove
          </Button>
        </Stack>
      ))}
      <FormControl>
        <Button onClick={props.onAddStep}>+ Add step</Button>
      </FormControl>
    </Stack>
  );
}
