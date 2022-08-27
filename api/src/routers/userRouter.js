import express from "express";
import { getUser, insertUser } from "../models/userModel.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const result = await insertUser(req.body);
    console.log(result);
    res.json({
      status: "success",
      message: "signed , please check your email",
    });
  } catch (error) {
    if (error.message.includes("E11000 duplicate key error collection")) {
      error.status = 200;
      error.message = "Email already in use, Sorry";
    }
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    console.log("clicked");
    const { email, password } = req.body;

    const user = await getUser({ email });
    res.json({
      status: "success",
      message: "get router",
    });
  } catch (error) {
    next(error);
  }
});

export default router;
