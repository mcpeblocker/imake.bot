import { IAction } from "@/api/modules/action/interface";
import { IProcedure } from "@/api/modules/procedure/interface";
import { ITrigger } from "@/api/modules/trigger/interface";
import { Box } from "@mui/joy";
import { Canvas } from "./canvas/Canvas";
import { useEffect, useRef, useState } from "react";

interface WhiteboardProps {
  triggers: ITrigger[];
  procedures: IProcedure[];
  actions: IAction[];
}

export const Whiteboard = (props: WhiteboardProps) => {
  const boxRef = useRef<HTMLDivElement>(null);

  const [width, setWidth] = useState<number>(300);
  const [height, setHeight] = useState<number>(150);

  useEffect(() => {
    const box = boxRef.current;
    if (box) {
      const { width, height } = box.getBoundingClientRect();
      setWidth(width);
      setHeight(height);
    }
  }, []);

  return (
    <Box sx={{ minHeight: 500 }} ref={boxRef}>
      <Canvas width={width} height={height} />
    </Box>
  );
};
