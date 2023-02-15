import { Router } from "express";
import bookController from "./controller.js";

const router = new Router();

router.post("/create", async (req, res) => {
  const createdBook = await bookController.create(req.body);
  res.json(createdBook);
});

router.post("/createMany", async (req, res) => {
  const createdBooks = await bookController.createMany(req.body.books);
  res.josn(createdBooks);
});

router.get("/readAll", async (_, res) => {
  const books = await bookController.readAll();
  res.json(books);
});

export default router;