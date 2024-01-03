import {
  Card,
  CardContent,
  CardOverflow,
  Link,
  Tooltip,
  Typography,
} from "@mui/joy";
import NextLink from "next/link";

interface ProcedureProps {
  procedure: {
    _id: string;
    name: string;
    steps: string[];
    chatbot: string;
  };
}

export function Procedure(props: ProcedureProps) {
  return (
    <Card orientation="horizontal">
      <CardContent
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography>{props.procedure.name}</Typography>
      </CardContent>
      <CardOverflow variant="solid" color="primary">
        <Tooltip
          title="Go to procedure details"
          variant="solid"
          placement="left"
        >
          <Link
            component={NextLink}
            href={`/dashboard/chatbot/${props.procedure.chatbot}/procedure/${props.procedure._id}`}
            underline="none"
            sx={{
              color: "white",
              p: 3,
            }}
          >
            <Typography>{">"}</Typography>
          </Link>
        </Tooltip>
      </CardOverflow>
    </Card>
  );
}
