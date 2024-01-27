import { useEffect, useRef } from "react";
import { IAction } from "@/api/modules/action/interface";
import { getActionDisplay } from "../displays/action.display";

interface ActionBlockProps {
  action: IAction;
  canvasRef: React.MutableRefObject<fabric.Canvas | null>;
}

export function ActionBlock(props: ActionBlockProps) {
  const actionRef = useRef<fabric.Object | null>(null);

  useEffect(() => {
    if (actionRef.current) return;
    if (!props.canvasRef.current) return;
    const actionDisplay = getActionDisplay(props.action);
    actionRef.current = actionDisplay;
    props.canvasRef.current.add(actionDisplay);
  }, []);

  return <></>;
}
