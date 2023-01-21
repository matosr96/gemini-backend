import { Collection, getModel } from "../../constants-definitions";
import { InsitutionSchemaMongo, Institution } from "../../types";

export const getInstitutionsById = async (uuid:string): Promise<Institution[]> => {
    const model = await getModel(Collection.INSTITUTIONS, InsitutionSchemaMongo)
    const data = await model.find({user: uuid}) as Institution[];
    return data;
}