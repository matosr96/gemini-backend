import { v4 as UUID } from 'uuid';
import { Collection, getModel } from '../../constants-definitions';
import { Book, BookSchemaMongo } from '../../types';

export const createBook = async (data: Book): Promise<Book | Error> => {
    
    const model = getModel(Collection.BOOKS, BookSchemaMongo);
    const uuid = UUID();

    const result = new model({...data, uuid});

    if (!result) throw new Error('601');

    await result.save();

    return {...result._doc};
}