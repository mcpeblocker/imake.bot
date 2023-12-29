import { logger } from "./common/logger";
import { connectToDatabase } from "./database";
import { ChatBot } from "./database/models/ChatBot.model";
import { User } from "./database/models/User.model";

connectToDatabase();

async function mainModule() {
  const bots = await ChatBot.find();
  const users = await User.find();
  logger.info(bots, users);
}

mainModule();
