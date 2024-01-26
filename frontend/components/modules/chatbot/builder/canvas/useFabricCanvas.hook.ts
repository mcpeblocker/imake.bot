import { useEffect, useRef } from "react";
import { fabric } from "fabric";

const useFabricCanvas = (
  canvasElementId: string,
  width: number,
  height: number
): fabric.Canvas | null => {
  const canvasRef = useRef<fabric.Canvas | null>(null);

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

  return canvasRef.current;
};

export default useFabricCanvas;
