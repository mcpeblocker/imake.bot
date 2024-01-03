import {
  Box,
  Card,
  CardContent,
  CardOverflow,
  Link,
  Tooltip,
  Typography,
} from "@mui/joy";
import NextLink from "next/link";

interface ActionProps {
  action: {
    _id: string;
    method: string;
    params: Record<string, any>;
    chatbot: string;
  };
}

export function Action(props: ActionProps) {
  return (
    <Card orientation="horizontal">
      <CardContent
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            p: 1,
            borderRadius: 10,
            background: "#F6F8FA",
          }}
        >
          <Typography textColor="#81CBFA" title={props.action.method}>
            {props.action.method}
          </Typography>
        </Box>
      </CardContent>
      <CardOverflow variant="solid" color="primary">
        <Tooltip title="Go to action details" variant="solid" placement="left">
          <Link
            component={NextLink}
            href={`/dashboard/chatbot/${props.action.chatbot}/action/${props.action._id}`}
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
