import { Stack } from "@mui/joy";
import { TriggersList } from "./entitylists/TriggersList";
import { ProceduresList } from "./entitylists/ProceduresList";
import { ActionsList } from "./entitylists/ActionsList";

export function EntityList() {
  return (
    <Stack direction="column">
      <TriggersList triggers={[]} />
      <ProceduresList procedures={[]} />
      <ActionsList actions={[]} />
    </Stack>
  );
}
