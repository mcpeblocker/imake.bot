import { Box } from "@mui/joy";
import { Canvas } from "./whiteboard/Canvas";
import { EntityType, IEntity } from "@/api/modules/interface";
import { TriggerBlock } from "./whiteboard/blocks/TriggerBlock";
import { ITrigger } from "@/api/modules/trigger/interface";
import { ProcedureBlock } from "./whiteboard/blocks/ProcedureBlock";
import { IProcedure } from "@/api/modules/procedure/interface";
import { ActionBlock } from "./whiteboard/blocks/ActionBlock";
import { IAction } from "@/api/modules/action/interface";
import React, { useRef } from "react";
import { fabric } from "fabric";

interface WhiteboardProps {
  entities: IEntity[];
}

export const Whiteboard = (props: WhiteboardProps) => {
  const canvasRef = useRef<fabric.Canvas | null>(null);

  return (
    <Box id="canvas-container" sx={{ minHeight: 500 }}>
      <Canvas canvasRef={canvasRef} />
      {props.entities.map((entity, index) => {
        switch (entity.entityType) {
          case EntityType.TRIGGER:
            return (
              <TriggerBlock
                key={index}
                trigger={entity as ITrigger}
                canvasRef={canvasRef}
              />
            );
          case EntityType.PROCEDURE:
            return (
              <ProcedureBlock
                key={index}
                procedure={entity as IProcedure}
                canvasRef={canvasRef}
              />
            );
          case EntityType.ACTION:
            return (
              <ActionBlock
                key={index}
                action={entity as IAction}
                canvasRef={canvasRef}
              />
            );
        }
      })}
    </Box>
  );
};
