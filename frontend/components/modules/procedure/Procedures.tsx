import { Button, Grid, Link, Stack, Typography } from "@mui/joy";
import { Procedure } from "./Procedure";
import NextLink from "next/link";

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
      <Stack direction="row" justifyContent="space-between">
        <Typography typography="h4">Procedures</Typography>
        <Link
          component={NextLink}
          href={`/dashboard/chatbot/${props.chatbotId}/procedure/new`}
          underline="none"
        >
          <Button>+ Add procedure</Button>
        </Link>
      </Stack>
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
