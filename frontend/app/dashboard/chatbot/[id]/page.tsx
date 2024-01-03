import { Triggers } from "@/components/modules/trigger/Triggers";
import { Container, Typography } from "@mui/joy";
import React from "react";

interface PageProps {
  params: {
    id: string;
  };
}

export default function Page({ params }: PageProps) {
  return (
    <Container>
      {/* General ChatBot Info */}
      <Typography typography="h2">{params.id}</Typography>
      {/* Triggers */}
      <Triggers chatbotId={params.id} />
    </Container>
  );
}
