import { fabric } from "fabric";
import { IAction } from "@/api/modules/action/interface";

export const getActionDisplay = (action: IAction) => {
  const left = 0;
  const top = 0;
  const rect = new fabric.Rect({
    width: 100,
    height: 20,
    fill: "#ffffff",
    stroke: "#666666",
    strokeWidth: 1,
    left,
    top,
    originX: "center",
    originY: "center",
  });

  const text = new fabric.Text(action.method, {
    fontSize: 16,
    left,
    top,
    originX: "center",
    originY: "center",
  });
  const group = new fabric.Group([rect, text], { left, top });
  return group;
};
