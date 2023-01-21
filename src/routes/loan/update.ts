import { RouteOptions } from "fastify";
import { updateLoan } from "../../bussines-logic";
import { Loan } from "../../types";

type Params = {
  uuid: string;
};

export const updateLoanRoute: RouteOptions = {
  method: "PUT",
  url: "/loans/:uuid",
  handler: async (request, reply) => {
    const { params } = request;
    const { uuid } = params as Params;
    const { body } = request;
    const { data } = body as { data: Loan };
    try {
      const obj = await updateLoan(uuid, data);
      reply.status(200).send(obj);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
