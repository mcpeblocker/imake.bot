import { Router, json, urlencoded } from "express";
import { TriggerEntity } from "./entity";
import { ChatBotEntity } from "../ChatBot/entity";
import { ProcedureEntity } from "../Procedure/entity";
import { chatBotService } from "../../services/chatbot.service";
import { ActionEntity } from "../Action/entity";
import { IAction } from "../Action/interface";

const router = Router();

router.get("/", async (req, res) => {
  const triggers = await TriggerEntity.find();
  res.status(200).json({
    code: 200,
    data: triggers,
  });
});

router.post("/", json(), urlencoded({ extended: false }), async (req, res) => {
  const { type, pattern, procedure: procedureId } = req.body;
  const procedure = await ProcedureEntity.findById(procedureId);
  const chatbotEntity = await ChatBotEntity.findById(procedure?.chatbot);
  if (!procedure || !chatbotEntity) {
    res.status(400).json({
      code: 400,
      data: null,
    });
    return;
  }
  const chatbotModel = await chatBotService.getChatBot(chatbotEntity.tg_token);
  const trigger = new TriggerEntity({
    type,
    pattern,
    procedure: procedureId,
  });
  await trigger.save();
  let steps: IAction[] = [];
  for (let step of procedure.steps) {
    const action = await ActionEntity.findById(step);
    steps.push({
      method: action!.method,
      params: action!.params,
      procedure: procedure,
    });
  }
  chatbotModel.registerTrigger({
    type: trigger.type,
    pattern: trigger.pattern,
    procedure: {
      chatbot: chatbotEntity,
      steps: steps,
    },
  });
  res.status(201).json({
    code: 200,
    data: trigger,
  });
});

router.get("/:id", async (req, res) => {
  const trigger = await TriggerEntity.findById(req.params.id);
  if (trigger) {
    res.status(200).json({
      code: 200,
      data: trigger,
    });
  } else {
    res.status(200).json({
      code: 404,
      data: null,
    });
  }
});

router.delete("/:id", async (req, res) => {
  const trigger = await TriggerEntity.findByIdAndDelete(req.params.id);
  if (trigger) {
    res.status(200).json({
      code: 200,
      data: trigger,
    });
  } else {
    res.status(200).json({
      code: 404,
      data: null,
    });
  }
});

export default router;
