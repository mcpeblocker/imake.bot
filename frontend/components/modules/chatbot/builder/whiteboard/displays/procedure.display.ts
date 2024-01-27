import { fabric } from "fabric";
import { IProcedure } from "@/api/modules/procedure/interface";

export const getProcedureDisplay = (procedure: IProcedure) => {
  const dimensions = {
    block: {
      left: {
        width: 20,
        height: 30,
        left: 0,
        top: 0,
      },
      center: {
        width: 100,
        height: 30,
        left: 20,
        top: 0,
      },
      right: {
        width: 20,
        height: 30,
        left: 120,
        top: 0,
      },
    },
    text: {
      left: 70,
      top: 0,
    },
  };
  const leftRect = new fabric.Rect({
    ...dimensions.block.left,
    fill: "#FEF3A4",
    stroke: "#F9BA50",
    strokeWidth: 1,
  });
  const centerRect = new fabric.Rect({
    ...dimensions.block.center,
    fill: "#FEF3A4",
    stroke: "#F9BA50",
    strokeWidth: 1,
  });
  const rightRect = new fabric.Rect({
    ...dimensions.block.right,
    fill: "#FEF3A4",
    stroke: "#F9BA50",
    strokeWidth: 1,
  });
  const block = new fabric.Group([leftRect, centerRect, rightRect], {});
  const text = new fabric.Text(procedure.name, {
    ...dimensions.text,
    fontSize: 16,
    originX: "center",
    originY: "top",
  });
  const procedureDisplay = new fabric.Group([block, text], {
    hasControls: false,
    hasBorders: false,
    hoverCursor: "pointer",
    data: procedure,
  });
  return procedureDisplay;
};
