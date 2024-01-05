import { api } from "@/api/api";
import { editProcedureById } from "@/api/modules/procedure/editProcedureById";
import { ProcedureForm } from "@/components/modules/procedure/ProcedureForm";
import { ProcedureInfo } from "@/components/modules/procedure/ProcedureInfo";
import { Breadcrumbs, Container, Typography, Link, Divider } from "@mui/joy";
import NextLink from "next/link";

interface ProcedurePageProps {
  params: {
    chatbotId: string;
    procedureId: string;
  };
}

export default async function Page(props: ProcedurePageProps) {
  const procedure = await api.procedure.getProcedureById(
    props.params.procedureId
  );
  const actions = await api.action.getActionsByChatbot(props.params.chatbotId);

  return (
    <Container>
      <div>
        {/* General procedure info */}
        <Breadcrumbs>
          <Link
            component={NextLink}
            href={`/dashboard/chatbot/${props.params.chatbotId}`}
            underline="none"
          >
            {props.params.chatbotId}
          </Link>
          <Typography typography="h2">Procedure</Typography>
        </Breadcrumbs>
        <ProcedureInfo procedure={procedure} />
        <Divider />
        <ProcedureForm
          chatbotId={props.params.chatbotId}
          procedure={procedure}
          actions={actions}
          onSave={editProcedureById}
        />
      </div>
    </Container>
  );
}
