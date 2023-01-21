import { Collection, getModel } from "../../constants-definitions";
import { BookSchemaMongo, Book } from "../../types";

export const getBooksById = async (uuid:string): Promise<Book[]> => {
    const model = await getModel(Collection.BOOKS, BookSchemaMongo)
    const data = await model.find({institution: uuid}) as Book[];
    return data;
}