import { RouteOptions } from "fastify";
import { createBorrowerRoute } from "./create";
import { deleteBorrowerByIdRoute } from "./delete";
import { getBorrowersByIdRoute } from "./get-by-id";
import { getAllBorrowersRoute } from "./list";
import { updateBorrowersRoute } from "./update";

export const borrowerRoutes: RouteOptions[] = [
  createBorrowerRoute,
  deleteBorrowerByIdRoute,
  getBorrowersByIdRoute,
  getAllBorrowersRoute,
  updateBorrowersRoute
];
