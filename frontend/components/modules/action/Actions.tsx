import { Button, Grid, Link, Stack, Typography } from "@mui/joy";
import { Action } from "./Action";
import NextLink from "next/link";
import { api } from "@/api/api";

interface ActionsProps {
  chatbotId: string;
}

export async function Actions(props: ActionsProps) {
  const actions = await api.action.getActionsByChatbot(props.chatbotId);

  return (
    <Stack direction="column">
      <Stack direction="row" justifyContent="space-between">
        <Typography typography="h4">Actions</Typography>
        <Link
          component={NextLink}
          href={`/dashboard/chatbot/${props.chatbotId}/action/new`}
          underline="none"
        >
          <Button>+ Add action</Button>
        </Link>
      </Stack>
      <Grid container spacing={2} mt={2}>
        {actions.map((action, index) => (
          <Grid xs={4} key={index}>
            <Action action={action} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
