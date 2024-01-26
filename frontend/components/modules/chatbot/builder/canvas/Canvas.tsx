import { ITrigger } from "@/api/modules/trigger/interface";
import useFabricCanvas from "./useFabricCanvas.hook";
import { IProcedure } from "@/api/modules/procedure/interface";
import { IAction } from "@/api/modules/action/interface";
import { useEffect } from "react";

interface CanvasProps {
  width: number;
  height: number;
  triggers: ITrigger[];
  procedures: IProcedure[];
  actions: IAction[];
}

export const Canvas = (props: CanvasProps) => {
  const { showTrigger, showProcedure } = useFabricCanvas(
    "whiteboard",
    props.width,
    props.height
  );

  useEffect(() => {
    for (let trigger of props.triggers) {
      showTrigger(trigger);
    }
    for (let procedure of props.procedures) {
      const actions = procedure.steps.map(
        (step) => props.actions.find((action) => action._id === step) as IAction
      );
      showProcedure(procedure, actions);
    }
  });

  return <canvas id="whiteboard" />;
};
