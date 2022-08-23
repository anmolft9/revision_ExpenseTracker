import express from "express";
import { insertUser } from "../models/userModel.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);

    const result = await insertUser(req.body);
    console.log(result);
    res.json({
      status: "success",
      message: "please check your email",
    });
  } catch (error) {
    if (error.message.includes("E11000 duplicate key error collection")) {
      error.status = 200;
      error.message = "Email already in use, Sorry";
    }
    next(error);
  }
});

export default router;
