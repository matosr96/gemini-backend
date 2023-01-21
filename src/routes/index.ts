import { FastifyInstance, RouteOptions } from "fastify";
import { bookRoutes } from "./book";
import { borrowerRoutes } from "./borrower";
import { institutionRoutes } from "./institution";
import { loanRoutes } from "./loan";
import { userRoutes } from "./users";

const routes: RouteOptions[] = [
  ...userRoutes,
  ...bookRoutes,
  ...institutionRoutes,
  ...loanRoutes,
  ...borrowerRoutes
];
export const registerRoutes = (fastify: FastifyInstance) => {
  fastify.log.warn("Registering routes", routes);

  routes.map((route) => {
    fastify.route(route);
  });
};
