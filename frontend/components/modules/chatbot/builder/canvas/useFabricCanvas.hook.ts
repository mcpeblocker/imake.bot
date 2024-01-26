import { useEffect, useRef } from "react";
import { fabric } from "fabric";
import { ITrigger } from "@/api/modules/trigger/interface";
import { IProcedure } from "@/api/modules/procedure/interface";
import { IAction } from "@/api/modules/action/interface";
import { getTriggerDisplay } from "./trigger.display";
import { getProcedureDisplay } from "./procedure.display";
import { getActionDisplay } from "./action.display";

interface IUseFabricCanvasReturn {
  canvasRef: fabric.Canvas | null;
  showTrigger: (trigger: ITrigger) => void;
  showProcedure: (procedure: IProcedure, actions: IAction[]) => void;
}

const useFabricCanvas = (
  canvasElementId: string,
  width: number,
  height: number
): IUseFabricCanvasReturn => {
  const canvasRef = useRef<fabric.Canvas | null>(null);
  const triggersRef = useRef<ITrigger[]>([]);
  const proceduresRef = useRef<IProcedure[]>([]);
  const actionsRef = useRef<IAction[]>([]);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasElementId, {
      width,
      height,
      backgroundColor: "#f2f2f2",
    });
    canvasRef.current = canvas;

    return () => {
      canvas.dispose();
    };
  }, [width, height, canvasElementId]);

  const showTrigger = (trigger: ITrigger) => {
    if (!canvasRef.current) return;
    const triggerDisplay = getTriggerDisplay(trigger);
    triggerDisplay.left = 10 + triggersRef.current.length * 100;
    triggerDisplay.top = 100;
    canvasRef.current.add(triggerDisplay);
    triggersRef.current.push(trigger);
  };

  const showProcedure = (procedure: IProcedure, actions: IAction[]) => {
    if (!canvasRef.current) return;
    const displays = [];
    for (let i = 0; i < actions.length; i++) {
      const action = actions[i];
      const actionDisplay = getActionDisplay(action);
      actionDisplay.top = 20 + i * 30;
      actionDisplay.left = 10;
      canvasRef.current.add(actionDisplay);
      actionsRef.current.push(action);
      displays.push(actionDisplay);
    }
    const procedureDisplay = getProcedureDisplay(procedure, actions.length);
    displays.push(procedureDisplay);
    const group = new fabric.Group(displays, {
      left: 150 + proceduresRef.current.length * 100,
      top: 100,
    });
    procedureDisplay.sendToBack();
    canvasRef.current.add(group);
    proceduresRef.current.push(procedure);
  };

  return {
    canvasRef: canvasRef.current,
    showTrigger,
    showProcedure,
  };
};

export default useFabricCanvas;
