import { Collection, getModel } from "../../constants-definitions";
import { InsitutionSchemaMongo, Institution, PartialInstitution } from "../../types";


export const updateInstitution = async ( uuid: string, data: PartialInstitution ): Promise<Institution | Error> => {
  
  const model = await getModel(Collection.INSTITUTIONS, InsitutionSchemaMongo);
  const obj = await model.findOne({ uuid });

  if (!obj) {
    throw new Error("NO SE ENCUENTRA");
  }

  const dataToUpdate = { ...data };

  await obj.updateOne(dataToUpdate);

  return { ...obj.doc };
};
