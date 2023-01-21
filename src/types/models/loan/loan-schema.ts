import { Schema } from "mongoose";
import { Loan } from "./loan";

export const LoanSchemaMongo = new Schema<Loan>(
  {
    uuid: { type: String, required: true, unique: true },
    user: { type: String, required: true },
    book: { type: String, required: true },
    borrower: { type: String, required: true },
    institution: { type: String, required: true },
    loan_date: { type: String, required: true },
    return_date: { type: String, required: true },
    state: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
