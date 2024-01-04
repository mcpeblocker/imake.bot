"use client";
import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Stack,
  Typography,
} from "@mui/joy";
import { useState } from "react";

export default function Page() {
  const [name, setName] = useState("");
  const [tg_token, setTg_token] = useState("");

  const submitForm = () => {
    const body = { name, tg_token };
    console.log(body);
  };

  return (
    <Container>
      <Typography typography="h2">Create new chatbot</Typography>
      <Stack gap={2} mt={2}>
        <FormControl>
          <FormLabel>Chatbot name</FormLabel>
          <Input
            name="name"
            placeholder="My first chatbot"
            defaultValue={name}
            onChange={(e) => setName(e.target.value)}
          />
          <FormHelperText>
            Give a distinguishable name to your new chatbot to make it easier
            for managing it yourself.
          </FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>Telegram Bot Token</FormLabel>
          <Input
            name="token"
            placeholder="0000000000:AAAAAA-aaaaaaaaaaaaaaaaaaaaaaaaaaaa"
            defaultValue={tg_token}
            onChange={(e) => setTg_token(e.target.value)}
          />
          <FormHelperText>
            Paste the telegram bot token you obtained from BotFather after
            creating one.
          </FormHelperText>
        </FormControl>
        <FormControl>
          <Button color="success" onClick={submitForm}>
            Create
          </Button>
        </FormControl>
      </Stack>
    </Container>
  );
}
