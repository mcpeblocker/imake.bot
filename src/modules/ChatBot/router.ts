import { Router, json, urlencoded, Request, Response } from "express";
import { ChatBotEntity } from "./entity";
import { IChatBot } from "./interfaces";
import { chatBotService } from "../../services/chatbot.service";

const router = Router();

router.get("/", async (req, res) => {
  const user: string = req.query.user as string;
  // Get ChatBotEntities owned by user
  const chatbots = await ChatBotEntity.find({
    owner: user,
  });
  res.status(200).json({
    code: 200,
    data: chatbots,
  });
});

router.post(
  "/",
  json(),
  urlencoded({ extended: false }),
  async (req: Request, res: Response) => {
    const user: string = req.query.user as string;
    // Create ChatBotEntity
    const { name, tg_token } = req.body as Pick<IChatBot, "name" | "tg_token">;
    const chatbotEntity = new ChatBotEntity({
      name,
      owner: user,
      tg_token,
    });
    await chatbotEntity.save();
    res.status(201).json({
      code: 200,
      data: chatbotEntity,
    });
  }
);

router.get("/:id", async (req, res) => {
  const user: string = req.query.user as string;
  // Get ChatBotEntity by ID owned by user
  const id: string = req.params.id;
  const chatbot = await ChatBotEntity.findOne({
    _id: id,
    owner: user,
  });
  if (chatbot) {
    res.status(200).json({ data: chatbot, code: 200 });
  } else {
    res.status(200).json({ data: null, code: 404 });
  }
});

router.delete("/:id", async (req, res) => {
  const user: string = req.query.user as string;
  // Delete ChatBotEntity by ID owned by user
  const id: string = req.params.id;
  const chatbot = await ChatBotEntity.findOneAndDelete({
    _id: id,
    owner: user,
  });
  if (chatbot) {
    res.status(200).json({ data: chatbot, code: 200 });
  } else {
    res.status(200).json({ data: null, code: 404 });
  }
});

export default router;
