import express from "express";
import controller from "./pet/controller";

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

app.listen(PORT, () => {
  console.info(`Server runninat at hhtp://localhost${PORT}/`);
});
