import { Router, json, urlencoded } from "express";
import { ActionEntity } from "./entity";
import { ProcedureEntity } from "../Procedure/entity";

const router = Router();

router.get("/", async (req, res) => {
  const actions = await ActionEntity.find();
  res.status(200).json({
    code: 200,
    data: actions,
  });
});

router.post("/", json(), urlencoded({ extended: false }), async (req, res) => {
  const { method, params, procedure: procedureId } = req.body;
  const action = new ActionEntity({
    method,
    params,
    procedureId,
  });
  await action.save();
  await ProcedureEntity.findByIdAndUpdate(procedureId, {
    $push: {
      steps: action._id,
    },
  });
  res.status(201).json({
    code: 200,
    data: action,
  });
});

router.get("/:id", async (req, res) => {
  const action = await ActionEntity.findById(req.params.id);
  if (action) {
    res.status(200).json({
      code: 200,
      data: action,
    });
  } else {
    res.status(200).json({
      code: 404,
      data: null,
    });
  }
});

router.delete("/:id", async (req, res) => {
  const action = await ActionEntity.findByIdAndDelete(req.params.id);
  if (action) {
    res.status(200).json({
      code: 200,
      data: action,
    });
  } else {
    res.status(200).json({
      code: 404,
      data: null,
    });
  }
});

export default router;
