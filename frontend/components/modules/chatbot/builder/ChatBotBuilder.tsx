"use client";

import { Grid } from "@mui/joy";
import { EntityList } from "./EntityList";
import { Whiteboard } from "./Whiteboard";
import { EntityInfo } from "./EntityInfo";
import { IChatBot } from "@/api/modules/chatbot/interface";
import { ITrigger } from "@/api/modules/trigger/interface";
import { IProcedure } from "@/api/modules/procedure/interface";
import { IAction } from "@/api/modules/action/interface";
import { useState } from "react";
import { IEntity } from "@/api/modules/interface";

interface ChatBotBuilderProps {
  chatbot: IChatBot;
  entities: IEntity[];
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
          entities={props.entities}
          selectedEntity={selectedEntity}
          selectEntity={setSelectedEntity}
        />
      </Grid>
      <Grid xs={8}>
        {/* Center: Whiteboard */}
        {/* <Box id="canvas-container" sx={{ minHeight: 500 }}> */}
        <Whiteboard entities={props.entities} />
        {/* </Box> */}
      </Grid>
      <Grid xs={2}>
        {/* Right: Entity info */}
        <EntityInfo chatbot={props.chatbot} selectedEntity={selectedEntity} />
      </Grid>
    </Grid>
  );
}
