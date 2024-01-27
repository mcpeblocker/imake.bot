import { fabric } from "fabric";
import { ITrigger } from "@/api/modules/trigger/interface";

export const getTriggerDisplay = (trigger: ITrigger): fabric.Group => {
  const left = 0;
  const top = 0;
  const rect = new fabric.Rect({
    width: 75,
    height: 50,
    fill: "#FFCFD5",
    stroke: "#FF89AF",
    strokeWidth: 1,
    left,
    top,
    originX: "center",
    originY: "center",
    skewX: -10,
  });
  const text = new fabric.Text(trigger.pattern, {
    fontSize: 16,
    left,
    top,
    originX: "center",
    originY: "center",
  });
  const group = new fabric.Group([rect, text], {
    left,
    top,
    hasControls: false,
    hasBorders: false,
    hoverCursor: "pointer",
    data: trigger,
  });

  return group;
};
