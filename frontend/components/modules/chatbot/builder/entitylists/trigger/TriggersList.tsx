import { ITrigger } from "@/api/modules/trigger/interface";
import { Box, Stack, Typography } from "@mui/joy";
import { TriggerListItem } from "./TriggerListItem";
import { IProcedure } from "@/api/modules/procedure/interface";
import { IAction } from "@/api/modules/action/interface";

interface TriggersListProps {
  triggers: ITrigger[];
  selectedEntity: ITrigger | IProcedure | IAction | null;
  selectTrigger: (trigger: ITrigger) => void;
}

export function TriggersList(props: TriggersListProps) {
  return (
    <Stack direction="column">
      <Typography>Triggers:</Typography>
      <Stack direction="row">
        <Box sx={{ flexGrow: 0.5 }}></Box>
        <Box sx={{ flexGrow: 10 }}>
          <Stack direction="column" gap={1}>
            {props.triggers.map((trigger) => (
              <TriggerListItem
                key={trigger._id}
                trigger={trigger}
                isSelected={trigger === props.selectedEntity}
                onSelect={() => props.selectTrigger(trigger)}
              />
            ))}
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
}
