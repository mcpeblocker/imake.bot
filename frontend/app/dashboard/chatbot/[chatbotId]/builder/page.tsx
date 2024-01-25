import { api } from "@/api/api";
import { ChatBotBuilder } from "@/components/modules/chatbot/builder/ChatBotBuilder";
import { Box } from "@mui/joy";

interface PageProps {
  params: {
    chatbotId: string;
  };
}

export default async function Page({ params }: PageProps) {
  const chatbot = await api.chatbot.getChatbotById(params.chatbotId);
  const triggers = await api.triggger.getTriggersByChatbot(params.chatbotId);
  const procedures = await api.procedure.getProceduresByChatbot(
    params.chatbotId
  );
  const actions = await api.action.getActionsByChatbot(params.chatbotId);

  return (
    <Box component="main" p={2}>
      <ChatBotBuilder
        chatbot={chatbot}
        triggers={triggers}
        procedures={procedures}
        actions={actions}
      />
    </Box>
  );
}
