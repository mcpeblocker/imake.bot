import { Router, json, urlencoded, Request, Response } from "express";
import { ChatBot } from "./model";
import { IChatBot } from "./interfaces";

const router = Router();

router.get("/", async (req, res) => {
  const user: string = req.query.user as string;
  // Get ChatBots owned by user
  const chatbots = await ChatBot.find({
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
    // Create ChatBot
    const { name, tg_name, tg_about, tg_description, tg_token, tg_username } =
      req.body as Omit<IChatBot, "owner">;
    const chatbot = new ChatBot({
      name,
      tg_name,
      tg_about,
      tg_description,
      tg_token,
      tg_username,
      owner: user,
    });
    await chatbot.save();
    res.status(201).json({
      code: 200,
      data: chatbot,
    });
  }
);

router.get("/:id", async (req, res) => {
  const user: string = req.query.user as string;
  // Get ChatBot by ID owned by user
  const id: string = req.params.id;
  const chatbot = await ChatBot.findOne({
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
  // Delete ChatBot by ID owned by user
  const id: string = req.params.id;
  const chatbot = await ChatBot.findOneAndDelete({
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
