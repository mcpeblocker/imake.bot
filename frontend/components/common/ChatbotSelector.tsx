import {
  Autocomplete,
  FormControl,
  FormHelperText,
  FormLabel,
  Link,
} from "@mui/joy";
import NextLink from "next/link";
import { useState } from "react";

interface ChatbotSelectorProps {
  defaultChatbot: string;
  onChange: (id: string) => void;
}

export function ChatbotSelector(props: ChatbotSelectorProps) {
  const chatbots = ["6592e48d12f9003fa2276e89"];

  const [chatbot, setChatbot] = useState(props.defaultChatbot);

  const handleChange = (chatbotId: string) => {
    setChatbot(chatbotId);
    props.onChange(chatbotId);
  };

  return (
    <FormControl>
      <FormLabel>Chatbot</FormLabel>
      <Autocomplete
        defaultValue={{
          label: chatbot,
          id: chatbot,
        }}
        options={chatbots.map((chatbot) => ({ label: chatbot, id: chatbot }))}
        onChange={(_, value) =>
          handleChange((value as { label: string; id: string })?.id)
        }
      />
      <FormHelperText>
        The chatbot to be attached.
        <Link
          component={NextLink}
          href={`/dashboard/chatbot/${chatbot}`}
          underline="none"
        >
          Go to chatbot details →
        </Link>
      </FormHelperText>
    </FormControl>
  );
}
