import { Collection, getModel } from '../../constants-definitions';
import { BookSchemaMongo } from '../../types';

export const deleteBook = async(uuid:String): Promise<Boolean | Error> => {
    const model = await getModel(Collection.BOOKS, BookSchemaMongo);
    const obj = await model.findOne({uuid:uuid});

    if(!obj) { throw new Error("602")};
    
    await obj.remove();
    
    return true;
}    