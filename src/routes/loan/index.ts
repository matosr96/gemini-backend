import { RouteOptions } from "fastify";
import { createLoanRoute } from "./create";
import { deleteLoanByIdRoute } from "./delete";
import { getLoansByIdRoute } from "./get-by-id";
import { getAllLoansRoute } from "./list";
import { updateLoanRoute } from "./update";

export const loanRoutes: RouteOptions[] = [
  createLoanRoute,
  deleteLoanByIdRoute,
  getLoansByIdRoute,
  getAllLoansRoute,
  updateLoanRoute
];
