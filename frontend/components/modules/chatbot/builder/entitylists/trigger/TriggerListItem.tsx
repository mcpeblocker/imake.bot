"use client";

import { ITrigger } from "@/api/modules/trigger/interface";
import { Box, Chip } from "@mui/joy";

interface TriggerListItemProps {
  trigger: ITrigger;
  isSelected: boolean;
  onSelect: () => void;
}

export function TriggerListItem(props: TriggerListItemProps) {
  return (
    <Box>
      <Chip
        variant={props.isSelected ? "solid" : "soft"}
        color={props.isSelected ? "primary" : "neutral"}
        endDecorator={
          <Chip
            variant={props.isSelected ? "outlined" : "soft"}
            color={props.isSelected ? "primary" : "neutral"}
          >
            {props.trigger.pattern}
          </Chip>
        }
        onClick={props.onSelect}
      >
        {props.trigger.type.toUpperCase()}
      </Chip>
    </Box>
  );
}
