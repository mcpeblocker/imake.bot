import { ITrigger } from "@/api/modules/trigger/interface";
import { useEffect, useRef } from "react";
import { getTriggerDisplay } from "../displays/trigger.display";

interface TriggerBlockProps {
  trigger: ITrigger;
  canvasRef: React.MutableRefObject<fabric.Canvas | null>;
}

export function TriggerBlock(props: TriggerBlockProps) {
  const triggerRef = useRef<fabric.Object | null>(null);
  useEffect(() => {
    if (triggerRef.current) return;
    if (!props.canvasRef.current) return;
    const triggerDisplay = getTriggerDisplay(props.trigger);
    triggerRef.current = triggerDisplay;
    props.canvasRef.current.add(triggerDisplay);
  }, []);

  return <></>;
}
