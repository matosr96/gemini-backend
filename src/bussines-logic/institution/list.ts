import { Collection, getModel } from "../../constants-definitions";
import { InsitutionSchemaMongo, Institution } from "../../types";

export const getAllInstitutions = async (): Promise<any> => {
    const model = await getModel(Collection.INSTITUTIONS, InsitutionSchemaMongo)
    const data = await model.find() as Institution[];
    return data;
}