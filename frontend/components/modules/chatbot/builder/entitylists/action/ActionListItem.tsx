"use client";

import { IAction } from "@/api/modules/action/interface";
import { Box, Chip } from "@mui/joy";

interface ActionListItemProps {
  action: IAction;
  isSelected: boolean;
  onSelect: () => void;
}

export function ActionListItem(props: ActionListItemProps) {
  return (
    <Box>
      <Chip
        variant={props.isSelected ? "solid" : "soft"}
        color={props.isSelected ? "primary" : "neutral"}
        onClick={props.onSelect}
      >
        {props.action.method}
      </Chip>
    </Box>
  );
}
