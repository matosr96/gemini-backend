import { Collection, getModel } from "../../constants-definitions";
import { BookSchemaMongo, Book } from "../../types";

export const getBookById = async (uuid:string): Promise<Book> => {
    const model = await getModel(Collection.BOOKS, BookSchemaMongo)
    const data = await model.findOne({uuid: uuid}) as Book;
    return data;
}