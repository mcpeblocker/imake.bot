"use client";
import TriggerPattern from "@/components/modules/trigger/TriggerPattern";
import TriggerType from "@/components/modules/trigger/TriggerType";
import {
  Breadcrumbs,
  Container,
  Typography,
  Link,
  Divider,
  Stack,
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
        <TriggerType defaultType={type} onChange={setType} />
        {/* Pattern */}
        <TriggerPattern defaultPattern={pattern} onChange={setPattern} />
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
            The procedure to be executed when a given pattern is detected.
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
