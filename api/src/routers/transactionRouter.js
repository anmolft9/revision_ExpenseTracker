import express from "express";
import { addTransaction } from "../models/transaction/TransactionModel";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);

    const result = await addTransaction(req.body);

    result?._id
      ? res.json({
          status: "success",
          message: "Post router for transaction",
        })
      : res.json({
          status: "error",
          message: "transaction not created",
        });
  } catch (error) {
    next(error);
  }
});

export default router;
