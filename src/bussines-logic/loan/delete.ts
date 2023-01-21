import { Collection, getModel } from '../../constants-definitions';
import { LoanSchemaMongo } from '../../types';

export const deleteLoan = async(uuid:String): Promise<Boolean | Error> => {
    const model = await getModel(Collection.LOAN, LoanSchemaMongo);
    const obj = await model.findOne({uuid:uuid});

    if(!obj) { throw new Error("602")};
    
    await obj.remove();
    
    return true;
}    