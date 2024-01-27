import React, { useEffect } from "react";
import { getCanvasDisplay } from "./displays/canvas.display";

interface CanvasProps {
  canvasRef: React.MutableRefObject<fabric.Canvas | null>;
}

export const Canvas = (props: CanvasProps) => {
  useEffect(() => {
    if (props.canvasRef.current) return;
    props.canvasRef.current = getCanvasDisplay();
  }, []);

  return <canvas id="whiteboard" />;
};
