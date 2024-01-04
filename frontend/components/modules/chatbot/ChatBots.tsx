"use client";

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
    <Stack>
      <Stack direction="row" justifyContent="space-between">
        <Typography typography="h4">Procedures</Typography>
        <Link
          component={NextLink}
          href={`/dashboard/chatbot/new`}
          underline="none"
        >
          <Button>+ Add procedure</Button>
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
                <Link
                  href={`/dashboard/chatbot/${chatbot._id}`}
                  component={NextLink}
                  underline="none"
                >
                  <Typography>Manage →</Typography>
                </Link>
              </Stack>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
