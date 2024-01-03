import { Breadcrumbs, Container, Typography, Link } from "@mui/joy";
import NextLink from "next/link";

interface ActionPageProps {
  params: {
    chatbotId: string;
    actionId: string;
  };
}

export default function Page(props: ActionPageProps) {
  return (
    <Container>
      {/* General action info */}
      <Breadcrumbs>
        <Link
          component={NextLink}
          href={`/dashboard/chatbot/${props.params.chatbotId}`}
          underline="none"
        >
          {props.params.chatbotId}
        </Link>
        <Typography typography="h2">Action {props.params.actionId}</Typography>
      </Breadcrumbs>
    </Container>
  );
}
