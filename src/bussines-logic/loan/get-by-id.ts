import { Collection, getModel } from "../../constants-definitions";
import { LoanSchemaMongo, Loan } from "../../types";

export const getLoansById = async (uuid:string): Promise<Loan[]> => {
    const model = await getModel(Collection.LOAN, LoanSchemaMongo)
    const data = await model.find({institution: uuid}) as Loan[];
    return data;
}