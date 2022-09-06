import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "user",
      require: true,
    },
    type: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },

    date: {
      type: Date,
      default: Date.now(),
    },

    amount: {
      type: Number,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("TransactionRev", TransactionSchema);
