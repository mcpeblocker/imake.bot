import { ChatBotBuilder } from "@/components/modules/chatbot/builder/ChatBotBuilder";
import { Box } from "@mui/joy";

interface PageProps {
  params: {
    chatbotId: string;
  };
}

export default function Page({ params }: PageProps) {
  return (
    <Box component="main" p={2}>
      <ChatBotBuilder chatbotId={params.chatbotId} />
    </Box>
  );
}
