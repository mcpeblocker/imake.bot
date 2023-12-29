import { IModule } from "../core/interfaces";
import { server } from "../core/server";
import chatBotModule from "./ChatBot";
import userModule from "./User";

const modules: IModule[] = [chatBotModule, userModule];

export function initializeModules() {
  for (let module of modules) {
    server.use(module.path, module.router);
  }
}
