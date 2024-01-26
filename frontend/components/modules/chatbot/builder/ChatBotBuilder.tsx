"use client";

import { Box, Divider, Grid, Stack } from "@mui/joy";
import { EntityList } from "./EntityList";
import { Whiteboard } from "./Whiteboard";
import { EntityInfo } from "./EntityInfo";
import { ChatbotInfo } from "../ChatbotInfo";
import { IChatBot } from "@/api/modules/chatbot/interface";
import { ITrigger } from "@/api/modules/trigger/interface";
import { IProcedure } from "@/api/modules/procedure/interface";
import { IAction } from "@/api/modules/action/interface";
import { useState } from "react";

interface ChatBotBuilderProps {
  chatbot: IChatBot;
  triggers: ITrigger[];
  procedures: IProcedure[];
  actions: IAction[];
}

export function ChatBotBuilder(props: ChatBotBuilderProps) {
  const [selectedEntity, setSelectedEntity] = useState<
    ITrigger | IProcedure | IAction | null
  >(null);

  return (
    <Grid container alignItems="stretch">
      <Grid xs={2}>
        {/* Left: Entity list */}
        <EntityList
          triggers={props.triggers}
          procedures={props.procedures}
          actions={props.actions}
          selectedEntity={selectedEntity}
          selectEntity={setSelectedEntity}
        />
      </Grid>
      <Grid xs={8}>
        {/* Center: Whiteboard */}
        <Whiteboard
          triggers={props.triggers}
          procedures={props.procedures}
          actions={props.actions}
        />
      </Grid>
      <Grid xs={2}>
        {/* Right: Entity info */}
        <EntityInfo chatbot={props.chatbot} selectedEntity={selectedEntity} />
      </Grid>
    </Grid>
  );
}
