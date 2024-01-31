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
import { EntityType, IEntity } from "@/api/modules/interface";

interface ChatBotBuilderProps {
  chatbot: IChatBot;
  triggers: ITrigger[];
  procedures: IProcedure[];
  actions: IAction[];
}

export function ChatBotBuilder(props: ChatBotBuilderProps) {
  const [selectedEntity, setSelectedEntity] = useState<IEntity | null>(null);
  const entities: IEntity[] = [
    ...props.triggers.map((trigger) => ({
      ...trigger,
      entityType: EntityType.TRIGGER,
    })),
    ...props.procedures.map((procedure) => ({
      ...procedure,
      entityType: EntityType.PROCEDURE,
    })),
    ...props.actions.map((action) => ({
      ...action,
      entityType: EntityType.ACTION,
    })),
  ];

  return (
    <Grid container alignItems="stretch">
      <Grid xs={2}>
        {/* Left: Entity list */}
        <EntityList
          entities={entities}
          selectedEntity={selectedEntity}
          selectEntity={setSelectedEntity}
        />
      </Grid>
      <Grid xs={8}>
        {/* Center: Whiteboard */}
        {/* <Box id="canvas-container" sx={{ minHeight: 500 }}> */}
        <Whiteboard
          entities={entities}
          selectedEntity={selectedEntity}
          onSelectEntity={setSelectedEntity}
        />
        {/* </Box> */}
      </Grid>
      <Grid xs={2}>
        {/* Right: Entity info */}
        <EntityInfo chatbot={props.chatbot} selectedEntity={selectedEntity} />
      </Grid>
    </Grid>
  );
}
