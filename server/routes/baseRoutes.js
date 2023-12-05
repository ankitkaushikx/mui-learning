import express from "express";

const mainRouter = express.Router();

mainRouter.get("/", (req, res) => {
  res.json({ ankit: "Ankitkaushik" });
});

export default mainRouter;
