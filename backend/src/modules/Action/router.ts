import { Router, json, urlencoded } from "express";
import { ActionEntity } from "./entity";

const router = Router();

router.get("/", async (req, res) => {
  const chatbot: string = req.query.chatbot as string;
  const actions = await ActionEntity.find({
    chatbot,
  });
  res.status(200).json({
    code: 200,
    data: actions,
  });
});

router.post("/", json(), urlencoded({ extended: false }), async (req, res) => {
  const { method, params, chatbot } = req.body;
  const action = new ActionEntity({
    method,
    params,
    chatbot,
  });
  await action.save();
  res.status(201).json({
    code: 200,
    data: action,
  });
});

router.put(
  "/:id",
  json(),
  urlencoded({ extended: true }),
  async (req, res) => {
    const action = await ActionEntity.findById(req.params.id);
    if (action) {
      action.method = req.body.method || action.method;
      action.params = req.body.params || action.params;
      await action.save();
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
  }
);

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
