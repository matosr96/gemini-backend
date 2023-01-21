import { Collection, getModel } from "../../constants-definitions";
import { InsitutionSchemaMongo, Institution } from "../../types";

export const getInstitutionById = async (uuid:string): Promise<Institution> => {
    const model = await getModel(Collection.INSTITUTIONS, InsitutionSchemaMongo)
    const data = await model.findOne({uuid: uuid}) as Institution;
    return data;
}