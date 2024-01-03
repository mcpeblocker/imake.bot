import { Grid, Stack, Typography } from "@mui/joy";
import { Action } from "./Action";

interface ActionsProps {
  chatbotId: string;
}

export function Actions(props: ActionsProps) {
  const actions = [
    {
      _id: "act123",
      method: "sendMessage",
      params: {
        chat_id: 800123427,
        text: "Hello, how are you?",
      },
      chatbot: props.chatbotId,
    },
    {
      _id: "act124",
      method: "sendMessage",
      params: {
        chat_id: 800123427,
        text: "I am planning to launch this product soon, I would greatly appreciate your help!",
      },
      chatbot: props.chatbotId,
    },
  ];

  return (
    <Stack direction="column">
      <Typography typography="h4">Actions</Typography>
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
