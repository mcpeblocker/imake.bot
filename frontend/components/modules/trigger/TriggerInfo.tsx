import { ITrigger } from "@/api/modules/trigger/interface";
import { Stack, Typography } from "@mui/joy";

interface TriggerInfoProps {
  trigger: ITrigger;
}

export async function TriggerInfo(props: TriggerInfoProps) {
  return (
    <Stack>
      <Typography typography="h2">
        {props.trigger.type.toUpperCase()}: {props.trigger.pattern}
      </Typography>
      <Typography typography="p">{props.trigger._id}</Typography>
    </Stack>
  );
}
