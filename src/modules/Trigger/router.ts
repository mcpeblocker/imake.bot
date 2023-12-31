import { Router, json, urlencoded } from "express";
import { TriggerEntity } from "./entity";

const router = Router();

router.get("/", async (req, res) => {
  const triggers = await TriggerEntity.find();
  res.status(200).json({
    code: 200,
    data: triggers,
  });
});

router.post("/", json(), urlencoded({ extended: false }), async (req, res) => {
  const { type, pattern, procedure } = req.body;
  const trigger = new TriggerEntity({
    type,
    pattern,
    procedure
  });
  await trigger.save();
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
