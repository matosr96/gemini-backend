import { RouteOptions } from "fastify";
import { getBorrowersById } from "../../bussines-logic";

export const getBorrowersByIdRoute: RouteOptions = {
  method: "GET",
  url: "/borrowers/:uuid",
  handler: async (request, reply) => {
    const { params } = request;
    const { uuid } = params as { uuid: string };
    try {
      const obj = await getBorrowersById(uuid);
      reply.status(200).send(obj);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
