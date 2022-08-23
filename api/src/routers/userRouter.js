import express from "express";
import { insertUser } from "../models/userModel.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);

    const result = await insertUser(req.body);
    res.json({
      status: "success",
      message: "please check your email",
    });
  } catch (error) {
    next(error);
  }
});

export default router;
