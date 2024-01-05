export interface IAction {
  _id: string;
  method: string;
  params: Record<string, any>;
  chatbot: string;
}
