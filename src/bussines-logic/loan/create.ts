import { v4 as UUID } from 'uuid';
import { Collection, getModel } from '../../constants-definitions';
import { Loan, LoanSchemaMongo } from '../../types';

export const createLoan = async (data: Loan): Promise<Loan | Error> => {
    
    const model = getModel(Collection.LOAN, LoanSchemaMongo);
    const uuid = UUID();

    const result = new model({...data, uuid});

    if (!result) throw new Error('601');

    await result.save();

    return {...result._doc};
}