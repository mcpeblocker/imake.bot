import { fabric } from "fabric";
import { IProcedure } from "@/api/modules/procedure/interface";

export const getProcedureDisplay = (
  procedure: IProcedure,
  numberOfActions: number
) => {
  const left = 0;
  const top = 0;
  const width = 120;
  const height = 20 + numberOfActions * 30;
  const rect = new fabric.Rect({
    width,
    height,
    fill: "rgba(255,255,255,0.5)",
    stroke: "#666666",
    strokeWidth: 1,
    left,
    top,
    rx: 10,
    ry: 10,
    originX: "center",
    originY: "top",
  });
  const text = new fabric.Text(procedure.name, {
    fontSize: 16,
    left,
    top,
    originX: "center",
    originY: "top",
  });
  const group = new fabric.Group([rect, text], { left, top });
  return group;
};
