import { Breadcrumbs, Container, Typography, Link } from "@mui/joy";
import NextLink from "next/link";

interface TriggerPageProps {
  params: {
    chatbotId: string;
    triggerId: string;
  };
}

export default function Page(props: TriggerPageProps) {
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
        <Typography typography="h2">
          Trigger {props.params.triggerId}
        </Typography>
      </Breadcrumbs>
      {/* Procedure */}
    </Container>
  );
}
