import { IAction } from "@/api/modules/action/interface";
import { Stack, Typography } from "@mui/joy";

interface ActionsListProps {
  actions: IAction[];
}

export function ActionsList(props: ActionsListProps) {
  return (
    <Stack direction="column">
      {props.actions.map((action) => (
        <Typography key={action._id}>{action.method}</Typography>
      ))}
    </Stack>
  );
}
