import { IAction } from "@/api/modules/action/interface";
import { IChatBot } from "@/api/modules/chatbot/interface";
import { IProcedure } from "@/api/modules/procedure/interface";
import { ITrigger } from "@/api/modules/trigger/interface";
import { Box } from "@mui/joy";
import { ChatbotInfo } from "../ChatbotInfo";
import { TriggerInfo } from "../../trigger/TriggerInfo";
import { ProcedureInfo } from "../../procedure/ProcedureInfo";
import { ActionInfo } from "../../action/ActionInfo";
import {
  instanceOfAction,
  instanceOfProcedure,
  instanceOfTrigger,
} from "./entity-utils";

interface EntityInfoProps {
  chatbot: IChatBot;
  selectedEntity: ITrigger | IProcedure | IAction | null;
}

export function EntityInfo(props: EntityInfoProps) {
  if (props.selectedEntity === null) {
    return (
      <Box p={1}>
        <ChatbotInfo chatbot={props.chatbot} />
      </Box>
    );
  }
  if (instanceOfTrigger(props.selectedEntity)) {
    return (
      <Box p={1}>
        <TriggerInfo trigger={props.selectedEntity} />
      </Box>
    );
  }
  if (instanceOfProcedure(props.selectedEntity)) {
    return (
      <Box p={1}>
        <ProcedureInfo procedure={props.selectedEntity} />
      </Box>
    );
  }
  if (instanceOfAction(props.selectedEntity)) {
    return (
      <Box p={1}>
        <ActionInfo action={props.selectedEntity} />
      </Box>
    );
  }
}
