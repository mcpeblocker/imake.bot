"use client";
import {
  Breadcrumbs,
  Container,
  Typography,
  Link,
  Stack,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
  Autocomplete,
} from "@mui/joy";
import NextLink from "next/link";
import { useState } from "react";

interface ProcedurePageProps {
  params: {
    chatbotId: string;
    procedureId: string;
  };
}

export default function Page(props: ProcedurePageProps) {
  const procedure = {
    _id: props.params.procedureId,
    name: "Greet the user",
    steps: ["act123"],
    chatbot: props.params.chatbotId,
  };

  const [name, setName] = useState(procedure.name);
  const [steps, setSteps] = useState<string[]>(procedure.steps);

  const addEmptyStep = () => {
    setSteps([...steps, ""]);
  };

  const removeStep = (index: number) => {
    const newSteps = [...steps];
    newSteps.splice(index, 1);
    setSteps(newSteps);
  };

  return (
    <Container>
      {/* General procedure info */}
      <Breadcrumbs>
        <Link
          component={NextLink}
          href={`/dashboard/chatbot/${props.params.chatbotId}`}
          underline="none"
        >
          {props.params.chatbotId}
        </Link>
        <Typography typography="h2">
          Procedure {props.params.procedureId}
        </Typography>
      </Breadcrumbs>
      {/* Steps */}
      <Stack gap={2} mt={2}>
        <FormControl>
          <FormLabel>Name:</FormLabel>
          <Input
            defaultValue={name}
            onChange={(e) => setName(e.target.value)}
          />
          <FormHelperText>
            Naming the procedure helps to differentiate and reuse them with
            ease.
          </FormHelperText>
        </FormControl>
        <FormLabel>Steps</FormLabel>
        {steps.map((step, index) => (
          <Stack key={index} direction="row" alignItems="center" gap={2}>
            <Typography>{index + 1}.</Typography>
            <FormControl sx={{ width: "100%" }}>
              <Autocomplete
                placeholder="Choose an action"
                defaultValue={{ label: step, id: step }}
                options={procedure.steps.map((item) => ({
                  label: item,
                  id: item,
                }))}
              />
            </FormControl>
            <Link
              component={NextLink}
              href={`/dashboard/chatbot/${props.params.chatbotId}/action/${step}`}
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
        <FormControl>
          <Button color="success">Save</Button>
        </FormControl>
      </Stack>
    </Container>
  );
}
