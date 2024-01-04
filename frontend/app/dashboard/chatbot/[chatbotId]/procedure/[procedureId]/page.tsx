"use client";
import { ProcedureSteps } from "@/components/modules/procedure/ProcedureSteps";
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
    steps: ["6592e49f12f9003fa2276e8d"],
    chatbot: props.params.chatbotId,
  };

  const [name, setName] = useState(procedure.name);
  const [steps, setSteps] = useState<string[]>(procedure.steps);

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
        <ProcedureSteps
          chatbotId={props.params.chatbotId}
          defaultSteps={steps}
          onChange={setSteps}
        />
        <FormControl>
          <Button color="success">Save</Button>
        </FormControl>
      </Stack>
    </Container>
  );
}
