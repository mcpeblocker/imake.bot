import useFabricCanvas from "./useFabricCanvas.hook";

interface CanvasProps {
  width: number;
  height: number;
}

export const Canvas = (props: CanvasProps) => {
  useFabricCanvas("whiteboard", props.width, props.height);

  return <canvas id="whiteboard" />;
};
