// import mongoose from "mongoose";
import UserSchema from "./UserSchema.js";

export const insertUser = (obj) => {
  return UserSchema(obj).save();
};

export const getUser = (filter) => {
  return UserSchema.findOne(filter);
};
