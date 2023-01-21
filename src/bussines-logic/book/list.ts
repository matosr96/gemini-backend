import { Collection, getModel } from "../../constants-definitions";
import { BookSchemaMongo, Book } from "../../types";

export const getAllBooks = async (): Promise<any> => {
    const model = await getModel(Collection.BOOKS, BookSchemaMongo)
    const data = await model.find({}) as Book[];
    return data;
}