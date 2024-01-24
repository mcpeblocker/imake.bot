import { api } from "@/api/api";
import {
  Button,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemContent,
  Stack,
  Typography,
} from "@mui/joy";
import NextLink from "next/link";

export async function ChatBots() {
  const chatbots = await api.chatbot.getChatbots();

  return (
    <Stack>
      <Stack direction="row" justifyContent="space-between">
        <Typography typography="h4">Chatbots</Typography>
        <Link
          component={NextLink}
          href={`/dashboard/chatbot/new`}
          underline="none"
        >
          <Button>+ Add chatbot</Button>
        </Link>
      </Stack>
      <List>
        {chatbots.map((chatbot, index) => (
          <ListItem key={index}>
            <ListItemButton>
              <Stack
                direction="row"
                justifyContent="space-between"
                width="100%"
              >
                <ListItemContent>{chatbot.name}</ListItemContent>
                <Stack direction="row" gap={2}>
                  <Link
                    href={`/dashboard/chatbot/${chatbot._id}/builder`}
                    component={NextLink}
                    underline="none"
                  >
                    <Button variant="outlined">Builder</Button>
                  </Link>
                  <Link
                    href={`/dashboard/chatbot/${chatbot._id}`}
                    component={NextLink}
                    underline="none"
                  >
                    <Button variant="plain">Manage →</Button>
                  </Link>
                </Stack>
              </Stack>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
