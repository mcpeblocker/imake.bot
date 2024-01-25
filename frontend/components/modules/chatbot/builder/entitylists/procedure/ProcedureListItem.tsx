"use client";

import { IProcedure } from "@/api/modules/procedure/interface";
import { Box, Chip } from "@mui/joy";

interface ProcedureListItemProps {
  procedure: IProcedure;
  isSelected: boolean;
  onSelect: () => void;
}

export function ProcedureListItem(props: ProcedureListItemProps) {
  return (
    <Box>
      <Chip
        variant={props.isSelected ? "solid" : "soft"}
        color={props.isSelected ? "primary" : "neutral"}
        onClick={props.onSelect}
      >
        {props.procedure.name}
      </Chip>
    </Box>
  );
}
