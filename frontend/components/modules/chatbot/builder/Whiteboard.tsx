import { EntityType, IEntity } from "@/api/modules/interface";
import { Box } from "@mui/joy";
import { ActionDisplay } from "./displays/Action.display";
import { TriggerDisplay } from "./displays/Trigger.display";
import { ProcedureDisplay } from "./displays/Procedure.display";

interface WhiteboardProps {
  entities: IEntity[];
  selectedEntity: IEntity | null;
  onSelectEntity: (entity: IEntity | null) => void;
}

export const Whiteboard = (props: WhiteboardProps) => {
  return (
    <Box
      sx={{
        backgroundColor: "#f2f2f2",
        width: "100%",
        position: "relative",
      }}
    >
      <svg
        width="100%"
        style={{
          aspectRatio: 2,
        }}
      >
        {props.entities.map((entity, index) => {
          const isSelected = props.selectedEntity?._id === entity._id;
          const onSelected = () => {
            if (isSelected === false) {
              props.onSelectEntity(entity);
            }
          };
          const onDeselected = () => {
            if (isSelected) {
              props.onSelectEntity(null);
            }
          };
          switch (entity.entityType) {
            case EntityType.TRIGGER:
              return (
                <TriggerDisplay
                  key={index}
                  trigger={entity}
                  isSelected={isSelected}
                  onSelect={onSelected}
                  onDeselect={onDeselected}
                />
              );
            case EntityType.PROCEDURE:
              return (
                <ProcedureDisplay
                  key={index}
                  procedure={entity}
                  isSelected={isSelected}
                  onSelect={onSelected}
                  onDeselect={onDeselected}
                />
              );
            case EntityType.ACTION:
              return (
                <ActionDisplay
                  key={index}
                  action={entity}
                  isSelected={isSelected}
                  onSelect={onSelected}
                  onDeselect={onDeselected}
                />
              );
          }
        })}
      </svg>
    </Box>
  );
};
