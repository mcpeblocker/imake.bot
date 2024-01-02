import { Router } from "express";

export interface IModule {
  path: string;
  router: Router;
}
