import { Router, json, urlencoded } from "express";
import { ProcedureEntity } from "./entity";

const router = Router();

router.get("/", async (req, res) => {
  const chatbot: string = req.query.chatbot as string;
  const procedures = await ProcedureEntity.find({
    chatbot,
  });
  res.status(200).json({
    code: 200,
    data: procedures,
  });
});

router.post("/", json(), urlencoded({ extended: false }), async (req, res) => {
  const { name, chatbot, steps } = req.body;
  const procedure = new ProcedureEntity({
    name,
    chatbot,
    steps,
  });
  await procedure.save();
  res.status(201).json({
    code: 200,
    data: procedure,
  });
});

router.put("/:id", json(), urlencoded({ extended: true }), async (req, res) => {
  const procedure = await ProcedureEntity.findById(req.params.id);
  if (procedure) {
    procedure.name = req.body.name || procedure.name;
    procedure.steps = req.body.steps || procedure.steps;
    await procedure.save();
    res.status(200).json({
      code: 200,
      data: procedure,
    });
  } else {
    res.status(200).json({
      code: 404,
      data: null,
    });
  }
});

router.get("/:id", async (req, res) => {
  const procedure = await ProcedureEntity.findById(req.params.id);
  if (procedure) {
    res.status(200).json({
      code: 200,
      data: procedure,
    });
  } else {
    res.status(200).json({
      code: 404,
      data: null,
    });
  }
});

router.delete("/:id", async (req, res) => {
  const procedure = await ProcedureEntity.findByIdAndDelete(req.params.id);
  if (procedure) {
    res.status(200).json({
      code: 200,
      data: procedure,
    });
  } else {
    res.status(200).json({
      code: 404,
      data: null,
    });
  }
});

export default router;
