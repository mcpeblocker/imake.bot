import { useEffect, useRef } from "react";
import { fabric } from "fabric";

const useFabricCanvas = (canvasElementId: string): fabric.Canvas | null => {
  const canvasRef = useRef<fabric.Canvas | null>(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasElementId, {
      isDrawingMode: true,
    });
    canvasRef.current = canvas;

    return () => {
      canvas.dispose();
    };
  }, []);

  return canvasRef.current;
};

export default useFabricCanvas;
