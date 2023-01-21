import { Collection, getModel } from "../../constants-definitions";
import { LoanSchemaMongo, Loan } from "../../types";

export const getLoanById = async (uuid:string): Promise<Loan> => {
    const model = await getModel(Collection.LOAN, LoanSchemaMongo)
    const data = await model.findOne({uuid: uuid}) as Loan;
    return data;
}