import { ITrigger } from "@/api/modules/trigger/interface";
import { Stack, Typography } from "@mui/joy";

interface TriggersListProps {
  triggers: ITrigger[];
}

export function TriggersList(props: TriggersListProps) {
  return (
    <Stack direction="column">
      {props.triggers.map((trigger) => (
        <Typography key={trigger._id}>
          {trigger.type.toUpperCase()}: {trigger.pattern}
        </Typography>
      ))}
    </Stack>
  );
}
