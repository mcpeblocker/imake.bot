"use client";
import { ActionMethod } from "@/components/modules/action/ActionMethod";
import { ActionParams } from "@/components/modules/action/ActionParams";
import {
  Breadcrumbs,
  Container,
  Typography,
  Link,
  Stack,
  Divider,
  FormControl,
  Button,
} from "@mui/joy";
import NextLink from "next/link";
import { useMemo, useState } from "react";

interface ActionPageProps {
  params: {
    chatbotId: string;
    actionId: string;
  };
}

export default function Page(props: ActionPageProps) {
  const action = {
    _id: props.params.actionId,
    method: "sendMessage",
    params: {
      chat_id: 800123427,
      text: "Hello, how are you?",
    },
    chatbot: props.params.chatbotId,
  };

  const [method, setMethod] = useState(action.method);
  const [params, setParams] = useState(JSON.stringify(action.params));

  const isNotChanged = useMemo(
    () => action.method === method && JSON.stringify(action.params) === params,
    [action, method]
  );

  return (
    <Container>
      {/* General action info */}
      <Breadcrumbs>
        <Link
          component={NextLink}
          href={`/dashboard/chatbot/${props.params.chatbotId}`}
          underline="none"
        >
          {props.params.chatbotId}
        </Link>
        <Typography typography="h2">Action {props.params.actionId}</Typography>
      </Breadcrumbs>
      <Divider />
      <Stack gap={2} mt={2}>
        {/* Method */}
        <ActionMethod defaultMethod={method} onChange={setMethod} />
        {/* Params */}
        <ActionParams defaultParams={params} onChange={setParams} />
        <FormControl>
          <Button disabled={isNotChanged} color="success">
            Save
          </Button>
        </FormControl>
      </Stack>
    </Container>
  );
}
