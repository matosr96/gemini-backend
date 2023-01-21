import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Collection, getModel } from "../../constants-definitions";
import { PartialUser, UserSchemaMongo } from "../../types";

interface UserSignin extends PartialUser {
  token: string;
}

export const userSignin = async ({ email, password }: PartialUser): Promise<UserSignin | Error> => {
  
  const model = await getModel(Collection.USERS, UserSchemaMongo);
  const user = await model.findOne({ email: email });

  if (!user) {
    return new Error("Usuario no existe o esta inactivo");
  }

  const match = await bcrypt.compare(password || "", user.password);

  if (!match) {
    return new Error("Contraseña o correo incorrecto");
  }

  const token = jwt.sign(
    {
      uuid: user.uuid,
      name: user.name,
      email: user.email
    },
    process.env.JWT_SECRET_KEY || "",
    { expiresIn: "24h" }
  );

  return {
    token,
    name: user.name,
    lastname: user.lastname,
    photo: user.photo,
    uuid: user.uuid,
    email: user.email,
    phone: user.phone,
  };
};
