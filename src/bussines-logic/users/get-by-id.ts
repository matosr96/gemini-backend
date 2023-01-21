import { Collection, getModel } from "../../constants-definitions";
import { User, UserSchemaMongo } from "../../types/models";

export const getUserById = async ( uuid: string, email: string ): Promise<User | Error> => {
  
  const model = await getModel(Collection.USERS, UserSchemaMongo);

  if (uuid) {
    const user = (await model.findOne({ uuid: uuid })) as User;
    return user;
  }

  if (email) {
    const user = (await model.findOne({ email: email })) as User;
    return user;
  }

  return new Error("Not send correct parameter");
};
