import { Schema } from "mongoose";
import { Borrower } from "./borrower";

export const BorrowerSchemaMongo = new Schema<Borrower>(
  {
    uuid: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    ocupation: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    photo: { type: String },
    institution: { type: String, required: true },
    status: { type: String, required: false, default: "active" },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
