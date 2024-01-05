import { IAction } from "@/api/modules/action/interface";
import { Stack, Typography } from "@mui/joy";

interface ActionInfoProps {
  action: IAction;
}

export async function ActionInfo(props: ActionInfoProps) {
  return (
    <Stack>
      <Typography typography="h2">{props.action.method}</Typography>
      <Typography typography="p">{props.action._id}</Typography>
    </Stack>
  );
}
