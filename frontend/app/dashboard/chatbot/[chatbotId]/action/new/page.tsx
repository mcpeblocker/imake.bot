"use client";
import { createAction } from "@/api/modules/action/createAction";
import { ActionForm } from "@/components/modules/action/ActionForm";
import { Container, Typography } from "@mui/joy";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface PageProps {
  params: {
    chatbotId: string;
  };
}

export default function Page(props: PageProps) {
  const [method, setMethod] = useState("sendMessage");
  const [params, setParams] = useState("{}");

  const router = useRouter();
  const submitForm = async () => {
    const result = await createAction({
      method,
      params: JSON.parse(params),
      chatbot: props.params.chatbotId,
    });
    router.push(
      `/dashboard/chatbot/${props.params.chatbotId}/action/${result._id}`
    );
  };

  return (
    <Container>
      <Typography typography="h2">Create new action</Typography>
      <ActionForm onSave={createAction} chatbotId={props.params.chatbotId} />
    </Container>
  );
}
