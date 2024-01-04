"use client";
import { ProcedureSteps } from "@/components/modules/procedure/ProcedureSteps";
import { Button, Container, FormControl, Stack, Typography } from "@mui/joy";
import { useState } from "react";

interface PageProps {
  params: {
    chatbotId: string;
  };
}

export default function Page(props: PageProps) {
  const [steps, setSteps] = useState<string[]>([]);

  const submitForm = () => {
    const body = { chatbot: props.params.chatbotId, steps };
    console.log(body);
  };

  return (
    <Container>
      <Typography typography="h2">Create new procedure</Typography>
      <Stack gap={2} mt={2}>
        <ProcedureSteps
          chatbotId={props.params.chatbotId}
          defaultSteps={steps}
          onChange={setSteps}
        />
        <FormControl>
          <Button color="success" onClick={submitForm}>
            Create
          </Button>
        </FormControl>
      </Stack>
    </Container>
  );
}
