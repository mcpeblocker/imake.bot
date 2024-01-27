import { Stack } from "@mui/joy";
import { TriggersList } from "./entitylists/trigger/TriggersList";
import { ProceduresList } from "./entitylists/procedure/ProceduresList";
import { ActionsList } from "./entitylists/action/ActionsList";
import { ITrigger } from "@/api/modules/trigger/interface";
import { IProcedure } from "@/api/modules/procedure/interface";
import { IAction } from "@/api/modules/action/interface";
import { EntityType, IEntity } from "@/api/modules/interface";

interface EntityListProps {
  entities: IEntity[];
  selectedEntity: ITrigger | IProcedure | IAction | null;
  selectEntity: (entity: ITrigger | IProcedure | IAction | null) => void;
}

export function EntityList(props: EntityListProps) {
  const selectTrigger = (trigger: ITrigger) => {
    props.selectEntity(props.selectedEntity === trigger ? null : trigger);
  };
  const selectProcedure = (procedure: IProcedure) => {
    props.selectEntity(props.selectedEntity === procedure ? null : procedure);
  };
  const selectAction = (action: IAction) => {
    props.selectEntity(props.selectedEntity === action ? null : action);
  };

  return (
    <Stack direction="column">
      <TriggersList
        triggers={
          props.entities.filter(
            (entity) => entity.entityType === EntityType.TRIGGER
          ) as ITrigger[]
        }
        selectedEntity={props.selectedEntity}
        selectTrigger={selectTrigger}
      />
      <ProceduresList
        procedures={
          props.entities.filter(
            (entity) => entity.entityType === EntityType.PROCEDURE
          ) as IProcedure[]
        }
        selectedEntity={props.selectedEntity}
        selectProcedure={selectProcedure}
      />
      <ActionsList
        actions={
          props.entities.filter(
            (entity) => entity.entityType === EntityType.ACTION
          ) as IAction[]
        }
        selectedEntity={props.selectedEntity}
        selectAction={selectAction}
      />
    </Stack>
  );
}
