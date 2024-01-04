"use client";
import TriggerPattern from "@/components/modules/trigger/TriggerPattern";
import TriggerProcedure from "@/components/modules/trigger/TriggerProcedure";
import TriggerType from "@/components/modules/trigger/TriggerType";
import { Button, Container, FormControl, Stack, Typography } from "@mui/joy";
import { useState } from "react";

interface PageProps {
  params: {
    chatbotId: string;
  };
}

export default function Page(props: PageProps) {
  const [type, setType] = useState("command");
  const [pattern, setPattern] = useState("");
  const [procedure, setProcedure] = useState<string>("");

  const submitForm = () => {
    const body = { chatbot: props.params.chatbotId, type, pattern, procedure };
    console.log(body);
  };

  return (
    <Container>
      <Typography typography="h2">Create new trigger</Typography>
      <Stack gap={2} mt={2}>
        <TriggerType defaultType={type} onChange={setType} />
        <TriggerPattern defaultPattern={pattern} onChange={setPattern} />
        <TriggerProcedure
          defaultProcedure={procedure}
          onChange={setProcedure}
          chatbotId={props.params.chatbotId}
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
