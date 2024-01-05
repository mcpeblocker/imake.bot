import { Router, json, urlencoded } from "express";
import { TriggerEntity } from "./entity";

const router = Router();

router.get("/", async (req, res) => {
  const chatbot: string = req.query.chatbot as string;
  const triggers = await TriggerEntity.find({
    chatbot,
  });
  res.status(200).json({
    code: 200,
    data: triggers,
  });
});

router.post("/", json(), urlencoded({ extended: false }), async (req, res) => {
  const { type, pattern, procedure, chatbot } = req.body;
  const trigger = new TriggerEntity({
    type,
    pattern,
    procedure,
    chatbot,
  });
  await trigger.save();
  res.status(201).json({
    code: 200,
    data: trigger,
  });
});

router.put("/:id", json(), urlencoded({ extended: true }), async (req, res) => {
  const trigger = await TriggerEntity.findById(req.params.id);
  if (trigger) {
    trigger.type = req.body.type || trigger.type;
    trigger.pattern = req.body.pattern || trigger.pattern;
    trigger.procedure = req.body.procedure || trigger.procedure;
    await trigger.save();
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
