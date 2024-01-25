import { IAction } from "@/api/modules/action/interface";
import { Box, Stack, Typography } from "@mui/joy";
import { ActionListItem } from "./ActionListItem";
import { ITrigger } from "@/api/modules/trigger/interface";
import { IProcedure } from "@/api/modules/procedure/interface";

interface ActionsListProps {
  actions: IAction[];
  selectedEntity: IAction | ITrigger | IProcedure | null;
  selectAction: (action: IAction) => void;
}

export function ActionsList(props: ActionsListProps) {
  return (
    <Stack direction="column">
      <Typography>Actions:</Typography>
      <Stack direction="row">
        <Box sx={{ flexGrow: 0.5 }}></Box>
        <Box sx={{ flexGrow: 10 }}>
          <Stack direction="column" gap={1}>
            {props.actions.map((action) => (
              <ActionListItem
                key={action._id}
                action={action}
                isSelected={action === props.selectedEntity}
                onSelect={() => props.selectAction(action)}
              />
            ))}
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
}
