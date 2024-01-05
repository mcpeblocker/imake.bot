import { Button, Grid, Link, Stack, Typography } from "@mui/joy";
import { Procedure } from "./Procedure";
import NextLink from "next/link";
import { api } from "@/api/api";

interface ProcedureProps {
  chatbotId: string;
}

export async function Procedures(props: ProcedureProps) {
  const procedures = await api.procedure.getProceduresByChatbot(
    props.chatbotId
  );

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
