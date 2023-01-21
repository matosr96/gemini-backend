import { Collection, getModel } from "../../constants-definitions";
import { BorrowerSchemaMongo, Borrower } from "../../types";

export const getBorrowersById = async (uuid:string): Promise<Borrower[]> => {
    const model = await getModel(Collection.BORROWERS, BorrowerSchemaMongo)
    const data = await model.find({institution: uuid}) as Borrower[];
    return data;
}