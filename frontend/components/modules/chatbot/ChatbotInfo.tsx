import { api } from "@/api/api";
import { Stack, Typography } from "@mui/joy";

interface ChatbotInfoProps {
  chatbotId: string;
}

export async function ChatbotInfo(props: ChatbotInfoProps) {
  const chatbot = await api.chatbot.getChatbotById(props.chatbotId);

  return (
    <Stack>
      <Typography typography="h2">{chatbot.name}</Typography>
      <Typography typography="p">{chatbot._id}</Typography>
    </Stack>
  );
}
