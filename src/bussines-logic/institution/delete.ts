import { Collection, getModel } from '../../constants-definitions';
import { InsitutionSchemaMongo } from '../../types';

export const deleteInstitution = async(uuid:String): Promise<Boolean | Error> => {
    const model = await getModel(Collection.INSTITUTIONS, InsitutionSchemaMongo);
    const obj = await model.findOne({uuid:uuid});

    if(!obj) { throw new Error("602")};
    
    await obj.remove();
    
    return true;
}    