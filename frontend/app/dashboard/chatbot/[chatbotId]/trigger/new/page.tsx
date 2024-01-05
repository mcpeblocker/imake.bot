import { api } from "@/api/api";
import { createTrigger } from "@/api/modules/trigger/createTrigger";
import { TriggerForm } from "@/components/modules/trigger/TriggerForm";
import { Container, Typography } from "@mui/joy";

interface PageProps {
  params: {
    chatbotId: string;
  };
}

export default async function Page(props: PageProps) {
  const procedures = await api.procedure.getProceduresByChatbot(
    props.params.chatbotId
  );

  return (
    <Container>
      <Typography typography="h2">Create new trigger</Typography>
      <TriggerForm
        procedures={procedures}
        chatbotId={props.params.chatbotId}
        onSave={createTrigger}
      />
    </Container>
  );
}
