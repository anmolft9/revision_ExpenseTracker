import express from "express";
import {
  addTransaction,
  deleteTransaction,
  getTransaction,
} from "../models/transaction/TransactionModel.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);

    const result = await addTransaction(req.body);

    result?._id
      ? res.json({
          status: "success",
          message: "Transaction Added successfully",
        })
      : res.json({
          status: "error",
          message: "transaction not created",
        });
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    console.log(authorization);

    const filter = { userId: authorization };

    const result = await getTransaction(filter);

    res.json({
      status: "success",
      message: "get router for transaction",
      result,
    });
  } catch (error) {
    next(error);
  }
});

router.delete("/:_id", async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const { _id } = req.params;
    console.log(authorization, _id);
    if (authorization && _id) {
      const filter = { userId: authorization, _id };
      const result = await deleteTransaction(filter);

      if (result._id) {
        res.json({
          status: "success",
          message: "transaction deleted",
          result,
        });
      }
    }
  } catch (error) {
    next(error);
  }
});

export default router;
