import { Collection, getModel } from "../../constants-definitions";
import { BookSchemaMongo, PartialBook } from "../../types";

export const updateBook = async ( uuid: string, data: PartialBook ): Promise<PartialBook | Error> => {
  
  const model = await getModel(Collection.BOOKS, BookSchemaMongo);
  const obj = await model.findOne({ uuid });

  if (!obj) {
    throw new Error("NO SE ENCUENTRA");
  }

  const dataToUpdate = { ...data };

  await obj.updateOne(dataToUpdate);

  return { ...obj.doc };
};
