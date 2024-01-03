import { Grid, Stack, Typography } from "@mui/joy";
import { Trigger } from "./Trigger";

interface TriggersProps {
  chatbotId: string;
}

export function Triggers(props: TriggersProps) {
  const triggers = [
    {
      _id: "tr123",
      type: "command",
      pattern: "start",
      procedure: "pr123",
      chatbot: props.chatbotId,
    },
    {
      _id: "tr124",
      type: "command",
      pattern: "help",
      procedure: "pr124",
      chatbot: props.chatbotId,
    },
    {
      _id: "tr125",
      type: "text",
      pattern: "Hello",
      procedure: "pr125",
      chatbot: props.chatbotId,
    },
    {
      _id: "tr126",
      type: "text",
      pattern: "Thanks",
      procedure: "pr125",
      chatbot: props.chatbotId,
    },
  ];

  return (
    <Stack direction="column">
      <Typography typography="h4">Triggers</Typography>
      <Grid container spacing={2} mt={2}>
        {triggers.map((trigger, index) => (
          <Grid xs={4} key={index}>
            <Trigger trigger={trigger} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
