import { v4 as UUID } from "uuid";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { PartialUser, UserSchemaMongo } from "../../types";
import { Collection, getModel } from "../../constants-definitions";

export const userSignup = async ({
  name,
  lastname,
  email,
  phone,
  photo,
  password
}: PartialUser): Promise<any> => {
  const model = await getModel(Collection.USERS, UserSchemaMongo);
  const user = await model.findOne({ email: email });

  if (user) {
    throw new Error("El usuario ya esta registrado");
  } else {
    const uuid = UUID();
    if (password) {
      password = bcrypt.hashSync(password, 10);
    }

    const user = new model({
      uuid,
      name,
      lastname,
      email,
      phone,
      photo,
      password
    });

    await user.save();

    const token = jwt.sign(
      {
        uuid: uuid,
        name: name,
        lastname: lastname,
        email: email,
        phone: phone,
      },
      process.env.JWT_SECRET_KEY || "",
      { expiresIn: "24h" }
    );

    return {
      token,
      ...user._doc,
    };
  }
};
