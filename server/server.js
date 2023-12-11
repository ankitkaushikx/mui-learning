import "dotenv/config";
import express from "express";
import router from "./routes/index.js";
import cors from "cors";
import morgan from "morgan";
const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(morgan("dev"));
// DATABASE
import connectDB from "./db.js";

await connectDB();

// ----------------------------------------
app.use(router);
app.listen(process.env.PORT, () => {
  console.log("----------------------------------------SERVER STARTED AT", process.env.PORT);
});
