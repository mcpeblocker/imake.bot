import { Breadcrumbs, Container, Typography, Link } from "@mui/joy";
import NextLink from "next/link";

interface ProcedurePageProps {
  params: {
    chatbotId: string;
    procedureId: string;
  };
}

export default function Page(props: ProcedurePageProps) {
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
        <Typography typography="h2">Procedure {props.params.procedureId}</Typography>
      </Breadcrumbs>
      {/* Steps */}
    </Container>
  );
}
