import { Navbar } from "@/components/common/Navbar";
import { ChatBots } from "@/components/modules/chatbot/ChatBots";
import { Container, Stack } from "@mui/joy";

export default function () {
  return (
    <Stack direction="column">
      {/* Navbar */}
      <Navbar />
      {/* Main */}
      <Container component="main">
        {/* ChatBots list */}
        <ChatBots />
      </Container>
      {/* Footer */}
      {/* TODO */}
    </Stack>
  );
}
