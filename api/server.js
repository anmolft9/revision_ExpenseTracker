import express from "express";
import cors from "cors";

const app = express();
const PORT = 8000;

//db connection
import { connectDB } from "./src/config/dbConfig.js";
connectDB();

///middlewares
app.use(cors());
app.use(express.json());

///api
import userRouter from "./src/routers/userRouter.js";
app.use("/api/v1/user", userRouter);

///server side rendering
app.use("/", (req, res, next) => {
  try {
    res.json({
      status: "success",
      message: "connected",
    });
  } catch (error) {
    console.log(error);
  }
});

app.use((error, req, res, next) => {
  const status = error.status || 404;
  res.status(status).json({
    status: "error",
    message: error.message,
  });
});

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`connected at http::localhost:${PORT}`);
  }
});
