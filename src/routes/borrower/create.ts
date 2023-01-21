import { RouteOptions } from "fastify";
import { createBorrower } from "../../bussines-logic";
import { Borrower } from "../../types";

export const createBorrowerRoute: RouteOptions = {
  method: "POST",
  url: "/borrowers",
  handler: async (request, reply) => {
    const { body } = request;
    const data = body as Borrower;
    try {
      const obj = await createBorrower(data);
      reply.status(201).send(obj);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
