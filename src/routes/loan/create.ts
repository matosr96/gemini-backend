import { RouteOptions } from "fastify";
import { createLoan } from "../../bussines-logic";
import { Loan } from "../../types";

export const createLoanRoute: RouteOptions = {
  method: "POST",
  url: "/loans",
  handler: async (request, reply) => {
    const { body } = request;
    const data = body as Loan;
    try {
      const obj = await createLoan(data);
      reply.status(201).send(obj);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
