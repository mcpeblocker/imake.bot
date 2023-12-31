import { Router, json, urlencoded } from "express";
import { ProcedureEntity } from "./entity";

const router = Router();

router.get("/", async (req, res) => {
  const procedures = await ProcedureEntity.find();
  res.status(200).json({
    code: 200,
    data: procedures,
  });
});

router.post("/", json(), urlencoded({ extended: false }), async (req, res) => {
  const { chatbot, steps } = req.body;
  const procedure = new ProcedureEntity({
    chatbot,
    steps,
  });
  await procedure.save();
  res.status(201).json({
    code: 200,
    data: procedure,
  });
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
