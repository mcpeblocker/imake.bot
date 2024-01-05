import { IProcedure } from "@/api/modules/procedure/interface";
import { Stack, Typography } from "@mui/joy";

interface ProcedureInfoProps {
  procedure: IProcedure;
}

export async function ProcedureInfo(props: ProcedureInfoProps) {
  return (
    <Stack>
      <Typography typography="h2">{props.procedure.name}</Typography>
      <Typography typography="p">{props.procedure._id}</Typography>
    </Stack>
  );
}
