import {
  Container,
  Tab,
  TabList,
  TabPanel,
  Tabs,
  Typography,
} from "@mui/joy";
import React from "react";
import { Triggers } from "@/components/modules/trigger/Triggers";
import { Procedures } from "@/components/modules/procedure/Procedures";
import { Actions } from "@/components/modules/action/Actions";

interface PageProps {
  params: {
    chatbotId: string;
  };
}

export default function Page({ params }: PageProps) {
  return (
    <Container>
      {/* General ChatBot Info */}
      <Typography typography="h2">{params.chatbotId}</Typography>
      {/* Chatbot relations */}
      <Tabs
        defaultValue={0}
        sx={{
          background: "inherit",
        }}
      >
        <TabList>
          <Tab value={0}>Triggers</Tab>
          <Tab value={1}>Procedures</Tab>
          <Tab value={2}>Actions</Tab>
        </TabList>
        <TabPanel value={0}>
          <Triggers chatbotId={params.chatbotId} />
        </TabPanel>
        <TabPanel value={1}>
          <Procedures chatbotId={params.chatbotId} />
        </TabPanel>
        <TabPanel value={2}>
          <Actions chatbotId={params.chatbotId} />
        </TabPanel>
      </Tabs>
    </Container>
  );
}
