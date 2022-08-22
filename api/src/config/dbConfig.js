import mongoose from "mongoose";

export const connectDB = () => {
  try {
    const MONGO_CLIENT = "mongodb://localhost/expense_tracker";
    const conn = mongoose.connect(MONGO_CLIENT);
    conn && console.log("db connected");
  } catch (error) {
    console.log(error);
  }
};
