import { IModule } from "../core/interfaces";
import { server } from "../core/server";
import chatBotModule from "./ChatBot";
import userModule from "./User";
import actionModule from "./Action";
import procedureModule from "./Procedure";
import triggerModule from "./Trigger";

const modules: IModule[] = [
  chatBotModule,
  userModule,
  actionModule,
  procedureModule,
  triggerModule,
];

export function initializeModules() {
  for (let module of modules) {
    server.use(module.path, module.router);
  }
}
