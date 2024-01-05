import { api } from "@/api/api";
import { editActionById } from "@/api/modules/action/editActionById";
import { ActionForm } from "@/components/modules/action/ActionForm";
import { ActionInfo } from "@/components/modules/action/ActionInfo";
import { Breadcrumbs, Container, Typography, Link, Divider } from "@mui/joy";
import NextLink from "next/link";

interface ActionPageProps {
  params: {
    chatbotId: string;
    actionId: string;
  };
}

export default async function Page(props: ActionPageProps) {
  const action = await api.action.getActionById(props.params.actionId);

  return (
    <Container>
      <div>
        {/* General action info */}
        <Breadcrumbs>
          <Link
            component={NextLink}
            href={`/dashboard/chatbot/${props.params.chatbotId}`}
            underline="none"
          >
            {props.params.chatbotId}
          </Link>
          <Typography typography="h2">Action</Typography>
        </Breadcrumbs>
        <ActionInfo action={action} />
        <Divider />
        <ActionForm
          action={action}
          onSave={editActionById}
          chatbotId={props.params.chatbotId}
        />
      </div>
    </Container>
  );
}
