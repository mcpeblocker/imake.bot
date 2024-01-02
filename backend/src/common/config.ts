import { configDotenv } from "dotenv";
import env from "env-var";
import * as path from "path";

interface IConfig {
  databaseUri: string;
  port: number;
  nodeEnv: "development" | "production";
}

configDotenv({
  path: path.join(__dirname, "../../env", ".env"),
});

export const config: IConfig = {
  databaseUri: env.get("DATABASE_URI").required().asString(),
  port: env.get("PORT").required().asPortNumber(),
  nodeEnv: env.get("NODE_ENV").required().asEnum(["development", "production"]),
};
