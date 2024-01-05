import { Button, Grid, Link, Stack, Typography } from "@mui/joy";
import { Trigger } from "./Trigger";
import NextLink from "next/link";
import { api } from "@/api/api";

interface TriggersProps {
  chatbotId: string;
}

export async function Triggers(props: TriggersProps) {
  const triggers = await api.triggger.getTriggersByChatbot(props.chatbotId);

  return (
    <Stack direction="column">
      <Stack direction="row" justifyContent="space-between">
        <Typography typography="h4">Triggers</Typography>
        <Link
          component={NextLink}
          href={`/dashboard/chatbot/${props.chatbotId}/trigger/new`}
          underline="none"
        >
          <Button>+ Add trigger</Button>
        </Link>
      </Stack>
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
