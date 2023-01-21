import { Collection, getModel } from '../../constants-definitions';
import { BorrowerSchemaMongo } from '../../types';

export const deleteBorrower = async(uuid:String): Promise<Boolean | Error> => {
    const model = await getModel(Collection.BORROWERS, BorrowerSchemaMongo);
    const obj = await model.findOne({uuid:uuid});

    if(!obj) { throw new Error("602")};
    
    await obj.remove();
    
    return true;
}    