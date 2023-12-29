import mongoose from "mongoose";
import { config } from "../common/config";
import { logger } from "../common/logger";

export async function connectToDatabase() {
  try {
    await mongoose.connect(config.databaseUri);
    logger.info("Database connection has been established!");
  } catch (error) {
    logger.fatal("Database connection couldn't be established!", { error });
  }
}
