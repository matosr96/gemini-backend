import { RouteOptions } from "fastify";
import { createBookRoute } from "./create";
import { deleteBookByIdRoute } from "./delete";
import { getBooksByIdRoute } from "./get-by-id";
import { getAllBooksRoute } from "./list";
import { updateBookRoute } from "./update";


export const bookRoutes: RouteOptions[] = [
  createBookRoute,
  deleteBookByIdRoute,
  getAllBooksRoute,
  getBooksByIdRoute,
  updateBookRoute
];
