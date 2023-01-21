import { Collection, getModel } from "../../constants-definitions";
import { BorrowerSchemaMongo, Borrower } from "../../types";

export const getBorrowerById = async (uuid:string): Promise<Borrower> => {
    const model = await getModel(Collection.BORROWERS, BorrowerSchemaMongo)
    const data = await model.findOne({uuid: uuid}) as Borrower;
    return data;
}