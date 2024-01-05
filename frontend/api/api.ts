import chatbotModule from "./modules/chatbot";
import triggerModule from "./modules/trigger";
import procedureModule from "./modules/procedure";
import actionModule from "./modules/action";

export const api = {
  chatbot: chatbotModule,
  triggger: triggerModule,
  procedure: procedureModule,
  action: actionModule,
};
