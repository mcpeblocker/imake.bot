"use client";
import {
  Breadcrumbs,
  Container,
  Typography,
  Link,
  Stack,
  Divider,
  FormControl,
  FormLabel,
  Autocomplete,
  FormHelperText,
  Button,
  Textarea,
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
        <FormControl>
          <FormLabel>Method</FormLabel>
          <Autocomplete
            defaultValue={{ label: method, id: method }}
            options={[{ label: "sendMessage", id: "sendMessage" }]}
            onChange={(_, value) =>
              setMethod((value as { label: string; id: string })?.id)
            }
          />
          <FormHelperText>
            The Telegram Bot API method to be used when action is executed.
          </FormHelperText>
        </FormControl>
        {/* Params */}
        <FormControl>
          <Textarea
            defaultValue={params}
            onChange={(e) => setParams(e.target.value)}
          />
          <FormHelperText>
            The params should be a json containing the relevant properties as
            given in telegram bot api docs
          </FormHelperText>
        </FormControl>
        <FormControl>
          <Button disabled={isNotChanged} color="success">
            Save
          </Button>
        </FormControl>
      </Stack>
    </Container>
  );
}
