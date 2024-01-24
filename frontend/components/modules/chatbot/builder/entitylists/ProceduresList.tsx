import { IProcedure } from "@/api/modules/procedure/interface";
import { Stack, Typography } from "@mui/joy";

interface ProceduresListProps {
  procedures: IProcedure[];
}

export function ProceduresList(props: ProceduresListProps) {
  return (
    <Stack direction="column">
      {props.procedures.map((procedure) => (
        <Typography key={procedure._id}>{procedure.name}</Typography>
      ))}
    </Stack>
  );
}
