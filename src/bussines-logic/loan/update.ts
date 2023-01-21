import { Collection, getModel } from "../../constants-definitions";
import { LoanSchemaMongo, PartialLoan } from "../../types";

export const updateLoan = async ( uuid: string, data: PartialLoan ): Promise<PartialLoan | Error> => {
  
  const model = await getModel(Collection.LOAN, LoanSchemaMongo);
  const obj = await model.findOne({ uuid });

  if (!obj) {
    throw new Error("NO SE ENCUENTRA");
  }

  const dataToUpdate = { ...data };

  await obj.updateOne(dataToUpdate);

  return { ...obj.doc };
};
