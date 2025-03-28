import { Container, Tab, TabList, TabPanel, Tabs } from "@mui/joy";
import React from "react";
import { Triggers } from "@/components/modules/trigger/Triggers";
import { Procedures } from "@/components/modules/procedure/Procedures";
import { Actions } from "@/components/modules/action/Actions";
import { ChatbotInfo } from "@/components/modules/chatbot/ChatbotInfo";
import { api } from "@/api/api";

interface PageProps {
  params: {
    chatbotId: string;
  };
}

export default async function Page({ params }: PageProps) {
  const chatbot = await api.chatbot.getChatbotById(params.chatbotId);
  return (
    <Container>
      <div>
        {/* General ChatBot Info */}
        <ChatbotInfo chatbot={chatbot} />
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
            <div>
              <Triggers chatbotId={params.chatbotId} />
            </div>
          </TabPanel>
          <TabPanel value={1}>
            <div>
              <Procedures chatbotId={params.chatbotId} />
            </div>
          </TabPanel>
          <TabPanel value={2}>
            <div>
              <Actions chatbotId={params.chatbotId} />
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </Container>
  );
}
