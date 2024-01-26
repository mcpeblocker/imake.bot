import useFabricCanvas from "./useFabricCanvas.hook";

interface CanvasProps {
  width: number;
  height: number;
}

const canvasStyle = {
  border: "1px solid black",
};

export const Canvas = (props: CanvasProps) => {
  useFabricCanvas("whiteboard");

  return (
    <canvas
      id="whiteboard"
      width={props.width}
      height={props.height}
      style={canvasStyle}
    />
  );
};
