import { config } from "./common/config";
import { logger } from "./common/logger";
import { connectToDatabase } from "./core/database";
import { server } from "./core/server";
import { initializeModules } from "./modules";
import { chatBotService } from "./services/chatbot.service";
import { initalizeErrorHandling } from "./services/errors.service";

connectToDatabase();

chatBotService.launchAll();

initializeModules();

initalizeErrorHandling();

server.listen(config.port, () => {
  logger.info("Server is listening on port " + config.port);
});
