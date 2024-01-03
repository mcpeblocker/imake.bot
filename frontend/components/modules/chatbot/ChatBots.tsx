"use client";

import {
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemContent,
  Stack,
  Typography,
} from "@mui/joy";
import NextLink from "next/link";

export function ChatBots() {
  const chatbots = [
    {
      name: "First bot",
      _id: "a1",
    },
    {
      name: "Second bot",
      _id: "a2",
    },
  ];

  return (
    <List>
      {chatbots.map((chatbot, index) => (
        <ListItem key={index}>
          <ListItemButton>
            <Stack direction="row" justifyContent="space-between" width="100%">
              <ListItemContent>{chatbot.name}</ListItemContent>
              <Link href={`/chatbot/${chatbot._id}`} component={NextLink}>
                <Typography>Manage →</Typography>
              </Link>
            </Stack>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
