import { createAction } from "@/api/modules/action/createAction";
import { ActionForm } from "@/components/modules/action/ActionForm";
import { Container, Typography } from "@mui/joy";

interface PageProps {
  params: {
    chatbotId: string;
  };
}

export default function Page(props: PageProps) {
  return (
    <Container>
      <Typography typography="h2">Create new action</Typography>
      <ActionForm onSave={createAction} chatbotId={props.params.chatbotId} />
    </Container>
  );
}
