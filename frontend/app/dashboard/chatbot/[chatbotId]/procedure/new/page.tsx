import { api } from "@/api/api";
import { createProcedure } from "@/api/modules/procedure/createProcedure";
import { ProcedureForm } from "@/components/modules/procedure/ProcedureForm";
import { Container, Typography } from "@mui/joy";

interface PageProps {
  params: {
    chatbotId: string;
  };
}

export default async function Page(props: PageProps) {
  const actions = await api.action.getActionsByChatbot(props.params.chatbotId);

  return (
    <Container>
      <Typography typography="h2">Create new procedure</Typography>
      <ProcedureForm
        chatbotId={props.params.chatbotId}
        actions={actions}
        onSave={createProcedure}
      />
    </Container>
  );
}
