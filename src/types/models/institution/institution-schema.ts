import { Schema } from "mongoose";
import { Institution } from "./institution";

export const InsitutionSchemaMongo = new Schema<Institution>(
    {
      uuid: { type: String, required: true, unique: true },
      name: { type: String, required: true },
      nit: { type: Number, required: true },
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true, unique: true },
      phone: { type: String, required: true, unique: true },
      photo: { type: String },
      address: { type: String, required: true },
      status: { type: String, required: false, default: "active" },
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );
  