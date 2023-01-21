import { RouteOptions } from "fastify";
import { getAllLoans } from "../../bussines-logic";

export const getAllLoansRoute: RouteOptions = {
  method: "GET",
  url: "/loans",
  handler: async (request, reply) => {
    try {
      const obj = await getAllLoans();
      reply.status(200).send(obj);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
