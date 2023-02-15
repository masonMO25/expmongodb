import express from "express";
import bookRouter from "./book/routes.js";
import controller from "./pet/controller.js";

const PORT = 3000;
const app = express();

// Middleware - allows us to parse JSON
app.use(express.json());

app.post("/create", (req, res) => {
  controller.create(req.body).then((result) => {
    res.json(result);
  });
});

app.get("/pet/readAll", (req, res) => {
  controller.readAll().then((result) => {
    res.json(result);
  });
});

// Middleware - Sends any request to /book to the bookRouter
app.use("/book", bookRouter);

app.listen(PORT, () => {
  console.info(`Server running at at https://localhost:${PORT}/`);
});
