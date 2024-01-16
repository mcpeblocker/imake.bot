"use client";
import { createChatbot } from "@/api/modules/chatbot/createChatbot";
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
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Page() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [tg_token, setTg_token] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const submitForm = async () => {
    setIsLoading(true);
    const result = await createChatbot({ name, tg_token });
    setIsLoading(false);
    router.push(`/dashboard/chatbot/${result._id}`);
    toast.success("Chatbot has been created!");
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
          <Button color="success" onClick={submitForm} loading={isLoading}>
            Create
          </Button>
        </FormControl>
      </Stack>
    </Container>
  );
}
