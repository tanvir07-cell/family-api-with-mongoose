import express from "express";
import "dotenv/config";
import { connectDB } from "./connect.js";
import meRouter from "./src/me/routes/me.routes.js";
import parentRouter from "./src/parents/routes/parents.routes.js";
import userRouter from "./src/user/routes/user.Routes.js";

import morgan from "morgan";

const app = express();
const PORT = process.env.PORT || 5000;
app.use([morgan("dev"), express.json()]);

// for user model:
app.use("/api/v1/users", userRouter);

// for me model:
app.use("/api/v1/me", meRouter);

// for parents model:
app.use("/api/v1/parents", parentRouter);

app.listen(PORT, async () => {
  console.log("Server listening on port " + process.env.PORT);

  await connectDB();
});
