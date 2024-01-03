import { ChatBots } from "@/components/modules/chatbot/ChatBots";
import { Container } from "@mui/joy";

export default function Page() {
  return (
    <Container component="main">
      {/* ChatBots list */}
      <ChatBots />
    </Container>
  );
}
