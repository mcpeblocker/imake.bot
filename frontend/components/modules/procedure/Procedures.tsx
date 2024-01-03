import { Grid, Stack, Typography } from "@mui/joy";
import { Procedure } from "./Procedure";

interface ProcedureProps {
  chatbotId: string;
}

export function Procedures(props: ProcedureProps) {
  const procedures = [
    {
      _id: "pr123",
      name: "Send welcoming messages",
      steps: [],
      chatbot: props.chatbotId,
    },
    {
      _id: "pr124",
      name: "Say welcome!",
      steps: [],
      chatbot: props.chatbotId,
    },
  ];

  return (
    <Stack direction="column">
      <Typography typography="h4">Procedures</Typography>
      <Grid container spacing={2} mt={2}>
        {procedures.map((procedure, index) => (
          <Grid xs={4} key={index}>
            <Procedure procedure={procedure} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
