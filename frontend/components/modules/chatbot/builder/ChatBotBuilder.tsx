import { Box, Stack } from "@mui/joy";
import { EntityList } from "./EntityList";
import { Whiteboard } from "./Whiteboard";
import { EntityInfo } from "./EntityInfo";

interface ChatBotBuilderProps {
  chatbotId: string;
}

export function ChatBotBuilder(props: ChatBotBuilderProps) {
  return (
    <Stack direction="row" alignItems="stretch" justifyContent="space-between">
      {/* Left: Entity list */}
      <Box sx={{ flexGrow: 1 }}>
        <EntityList />
      </Box>
      {/* Center: Whiteboard */}
      <Box sx={{ flexGrow: 5 }}>
        <Whiteboard />
      </Box>
      {/* Right: Entity info */}
      <Box sx={{ flexGrow: 1 }}>
        <EntityInfo />
      </Box>
    </Stack>
  );
}
