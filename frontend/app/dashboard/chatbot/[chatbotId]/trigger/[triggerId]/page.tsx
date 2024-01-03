"use client";
import {
  Breadcrumbs,
  Container,
  Typography,
  Link,
  Divider,
  Select,
  Option,
  Stack,
  Input,
  Button,
  Autocomplete,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@mui/joy";
import NextLink from "next/link";
import { useMemo, useState } from "react";

interface TriggerPageProps {
  params: {
    chatbotId: string;
    triggerId: string;
  };
}

export default function Page(props: TriggerPageProps) {
  const trigger = {
    _id: "tr123",
    type: "command",
    pattern: "start",
    procedure: "pr123",
    chatbot: props.params.chatbotId,
  };

  const [type, setType] = useState(trigger.type);
  const [pattern, setPattern] = useState(trigger.pattern);
  const [procedure, setProcedure] = useState(trigger.procedure);

  const isNotChanged = useMemo(
    () =>
      trigger.type === type &&
      trigger.pattern === pattern &&
      trigger.procedure === procedure,
    [trigger, type, pattern, procedure]
  );

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
          Trigger {props.params.triggerId}
        </Typography>
      </Breadcrumbs>
      <Divider />
      <Stack gap={2} mt={2}>
        {/* Type */}
        <FormControl>
          <FormLabel>Type:</FormLabel>
          <Select
            placeholder="Choose one"
            defaultValue={type}
            onChange={(e, value) => setType(value as string)}
          >
            <Option value="command">COMMAND</Option>
            <Option value="text">TEXT</Option>
          </Select>
          <FormHelperText>
            The type of a trigger corresponding to telegram update.
          </FormHelperText>
        </FormControl>
        {/* Pattern */}
        <FormControl>
          <FormLabel>Pattern:</FormLabel>
          <Input
            defaultValue={pattern}
            onChange={(e) => setPattern(e.target.value)}
          />
          <FormHelperText>
            The pattern to be detected of selected type to execute given
            procedure.
          </FormHelperText>
        </FormControl>
        {/* Procedure */}
        <FormControl>
          <FormLabel>Procedure:</FormLabel>
          <Autocomplete
            defaultValue={{
              label: procedure,
              id: procedure,
            }}
            options={[{ label: trigger.procedure, id: trigger.procedure }]}
            onChange={(_, value) =>
              setProcedure((value as { label: string; id: string })?.id)
            }
          />
          <FormHelperText>
            The pattern to be detected of selected type to execute given
            procedure.
            <Link
              component={NextLink}
              href={`/dashboard/chatbot/${props.params.chatbotId}/procedure/${procedure}`}
              underline="none"
            >
              Go to chosen procedure details →
            </Link>
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
