import { Schema } from "mongoose";
import { Book } from "./books";

export const BookSchemaMongo = new Schema<Book>(
  {
    uuid: { type: String, required: true, unique: true },
    user: { type: String, required: true },
    institution: { type: String, required: true },
    title: { type: String, required: true },
    author: { type: String, required: true, unique: true },
    editorial: { type: String, required: true },
    amount: { type: String, required: true },
    state: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
