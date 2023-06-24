import express from "express";
import "dotenv/config";
import { connectDB } from "./connect.js";
import { Me } from "./src/me/model/me.js";

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
import meRouter from "./src/me/routes/me.routes.js";

// for me model:
app.use("/api/v1/me", meRouter);

app.listen(PORT, async () => {
  console.log("Server listening on port " + process.env.PORT);

  await connectDB();
});
