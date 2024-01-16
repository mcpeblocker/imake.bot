import process from "node:process";
import { Request, Response, NextFunction } from "express";
import { logger } from "../common/logger";
import { server } from "../core/server";

export function initalizeErrorHandling() {
  server.use(
    (error: Error, req: Request, res: Response, next: NextFunction) => {
      logger.error("Server error received.", { message: error.message, error });
      res.status(500).json({ code: 500, data: null });
    }
  );

  process.on("unhandledRejection", (reason) => {
    logger.error("Unhandled rejection received.", { reason });
  });

  process.on("uncaughtException", (error) => {
    logger.error("Uncaught exception received.", {
      message: error.message,
      error,
    });
  });
}
