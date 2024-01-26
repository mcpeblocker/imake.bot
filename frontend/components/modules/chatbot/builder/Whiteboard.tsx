import { IAction } from "@/api/modules/action/interface";
import { IProcedure } from "@/api/modules/procedure/interface";
import { ITrigger } from "@/api/modules/trigger/interface";
import { Box } from "@mui/joy";
import { Canvas } from "./canvas/Canvas";

interface WhiteboardProps {
  triggers: ITrigger[];
  procedures: IProcedure[];
  actions: IAction[];
}

export const Whiteboard = (props: WhiteboardProps) => {
  return (
    <Box>
      <Canvas width={900} height={500} />
    </Box>
  );
};
