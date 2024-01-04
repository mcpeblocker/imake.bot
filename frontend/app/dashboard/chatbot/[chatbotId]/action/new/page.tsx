"use client";
import { ActionMethod } from "@/components/modules/action/ActionMethod";
import { ActionParams } from "@/components/modules/action/ActionParams";
import { Button, Container, FormControl, Stack, Typography } from "@mui/joy";
import { useState } from "react";

interface PageProps {
  params: {
    chatbotId: string;
  };
}

export default function Page(props: PageProps) {
  const [method, setMethod] = useState("sendMessage");
  const [params, setParams] = useState("{}");

  const submitForm = () => {
    const body = {
      method,
      params: JSON.parse(params),
      chatbot: props.params.chatbotId,
    };
    console.log(body);
  };

  return (
    <Container>
      <Typography typography="h2">Create new action</Typography>
      <Stack gap={2} mt={2}>
        <ActionMethod defaultMethod={method} onChange={setMethod} />
        <ActionParams defaultParams={params} onChange={setParams} />
        <FormControl>
          <Button color="success" onClick={submitForm}>
            Create
          </Button>
        </FormControl>
      </Stack>
    </Container>
  );
}
