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

interface TriggerProps {
  trigger: {
    _id: string;
    type: string;
    pattern: string;
    procedure: string;
    chatbot: string;
  };
}

export function Trigger(props: TriggerProps) {
  return (
    <Card
      orientation="horizontal"
      sx={{
        height: "75px",
      }}
    >
      {/* Indication of type */}
      <CardOverflow variant="soft" color="primary">
        <Typography
          sx={{
            color: "#6639BA",
            writingMode: "vertical-lr",
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          {props.trigger.type}
        </Typography>
      </CardOverflow>
      {/* Pattern */}
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
          <Typography textColor="#81CBFA">{props.trigger.pattern}</Typography>
        </Box>
      </CardContent>
      {/* Link to procedure */}
      <CardOverflow variant="solid" color="primary">
        <Tooltip title="Go to procedure" variant="solid" placement="left">
          <Link
            component={NextLink}
            href={`/dashboard/chatbot/${props.trigger.chatbot}/procedure/${props.trigger.procedure}`}
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
