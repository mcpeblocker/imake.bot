import { api } from "@/api/api";
import { editTriggerById } from "@/api/modules/trigger/editTriggerById";
import { TriggerForm } from "@/components/modules/trigger/TriggerForm";
import { TriggerInfo } from "@/components/modules/trigger/TriggerInfo";
import { Breadcrumbs, Container, Typography, Link, Divider } from "@mui/joy";
import NextLink from "next/link";

interface TriggerPageProps {
  params: {
    chatbotId: string;
    triggerId: string;
  };
}

export default async function Page(props: TriggerPageProps) {
  const trigger = await api.triggger.getTriggerById(props.params.triggerId);
  const procedures = await api.procedure.getProceduresByChatbot(
    props.params.chatbotId
  );

  return (
    <Container>
      {/* General procedure info */}
      <Breadcrumbs>
        <Link
          component={NextLink}
          href={`/dashboard/chatbot/${props.params.chatbotId}`}
          underline="none"
        >
          {props.params.chatbotId}
        </Link>
        <Typography typography="h2">Trigger</Typography>
      </Breadcrumbs>
      <div>
        <TriggerInfo trigger={trigger} />
      </div>
      <Divider />
      <TriggerForm
        trigger={trigger}
        procedures={procedures}
        chatbotId={props.params.chatbotId}
        onSave={editTriggerById}
      />
    </Container>
  );
}
