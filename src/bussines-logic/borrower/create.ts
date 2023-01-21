import { v4 as UUID } from 'uuid';
import { Collection, getModel } from '../../constants-definitions';
import { Borrower, BorrowerSchemaMongo } from '../../types';

export const createBorrower = async (data: Borrower): Promise<Borrower | Error> => {
    
    const model = getModel(Collection.BORROWERS, BorrowerSchemaMongo);
    const uuid = UUID();

    const result = new model({...data, uuid});

    if (!result) throw new Error('601');

    await result.save();

    return {...result._doc};
}