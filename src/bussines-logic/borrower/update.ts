import { Collection, getModel } from "../../constants-definitions";
import { BorrowerSchemaMongo, PartialBorrower } from "../../types";

export const updateBorrower = async ( uuid: string, data: PartialBorrower ): Promise<PartialBorrower | Error> => {
  
  const model = await getModel(Collection.BORROWERS, BorrowerSchemaMongo);
  const obj = await model.findOne({ uuid });

  if (!obj) {
    throw new Error("NO SE ENCUENTRA");
  }

  const dataToUpdate = { ...data };

  await obj.updateOne(dataToUpdate);

  return { ...obj.doc };
};
