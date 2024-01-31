import { IProcedure } from "@/api/modules/procedure/interface";
import { Box, Stack, Typography } from "@mui/joy";
import { ProcedureListItem } from "./ProcedureListItem";
import { ITrigger } from "@/api/modules/trigger/interface";
import { IAction } from "@/api/modules/action/interface";

interface ProceduresListProps {
  procedures: IProcedure[];
  selectedEntity: IProcedure | ITrigger | IAction | null;
  selectProcedure: (procedure: IProcedure) => void;
}

export function ProceduresList(props: ProceduresListProps) {
  return (
    <Stack direction="column">
      <Typography>Procedures:</Typography>
      <Stack direction="row">
        <Box sx={{ flexGrow: 0.5 }}></Box>
        <Box sx={{ flexGrow: 10 }}>
          <Stack direction="column" gap={1}>
            {props.procedures.map((procedure) => (
              <ProcedureListItem
                key={procedure._id}
                procedure={procedure}
                isSelected={procedure._id === props.selectedEntity?._id}
                onSelect={() => props.selectProcedure(procedure)}
              />
            ))}
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
}
