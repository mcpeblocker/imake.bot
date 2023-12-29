import { config } from "./common/config";
import { logger } from "./common/logger";
import { connectToDatabase } from "./core/database";
import { server } from "./core/server";
import { initializeModules } from "./modules";

connectToDatabase();
initializeModules();

server.listen(config.port, () => {
  logger.info("Server is listening on port " + config.port);
});
