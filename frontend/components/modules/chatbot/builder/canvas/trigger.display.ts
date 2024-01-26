import { fabric } from "fabric";
import { ITrigger } from "@/api/modules/trigger/interface";

export const getTriggerDisplay = (trigger: ITrigger) => {
  const left = 0;
  const top = 0;
  const rect = new fabric.Rect({
    width: 100,
    height: 30,
    fill: "#ffffff",
    stroke: "#666666",
    strokeWidth: 1,
    left,
    top,
    rx: 10,
    ry: 10,
    originX: "center",
    originY: "center",
  });
  const text = new fabric.Text(trigger.pattern, {
    fontSize: 16,
    left,
    top,
    originX: "center",
    originY: "center",
  });
  const group = new fabric.Group([rect, text], { left, top });
  return group;
};
