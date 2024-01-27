import { fabric } from "fabric";

export const getCanvasDisplay = () => {
  const canvasContainerId = "canvas-container";
  const canvasElementId = "whiteboard";
  const container = document.getElementById(canvasContainerId)!;
  const { width, height } = container.getBoundingClientRect();
  const canvas = new fabric.Canvas(canvasElementId, {
    width,
    height,
    backgroundColor: "#f2f2f2",
    selection: false,
  });
  return canvas;
};
