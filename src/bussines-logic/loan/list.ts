import { Collection, getModel } from "../../constants-definitions";
import { LoanSchemaMongo, Loan } from "../../types";

export const getAllLoans = async (): Promise<any> => {
    const model = await getModel(Collection.LOAN, LoanSchemaMongo)
    const data = await model.find({}) as Loan[];
    return data;
}