import { IChatBot } from "@/api/modules/chatbot/interface";
import { Stack, Typography } from "@mui/joy";

interface ChatbotInfoProps {
  chatbot: IChatBot;
}

export function ChatbotInfo(props: ChatbotInfoProps) {
  return (
    <Stack>
      <Typography typography="h2">{props.chatbot.name}</Typography>
      <Typography typography="p">{props.chatbot._id}</Typography>
    </Stack>
  );
}
