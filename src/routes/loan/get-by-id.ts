import { RouteOptions } from "fastify";
import { getLoansById } from "../../bussines-logic";

export const getLoansByIdRoute: RouteOptions = {
  method: "GET",
  url: "/loans/:uuid",
  handler: async (request, reply) => {
    const { params } = request;
    const { uuid } = params as { uuid: string };
    try {
      const obj = await getLoansById(uuid);
      reply.status(200).send(obj);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
