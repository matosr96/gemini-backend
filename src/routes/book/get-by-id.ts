import { RouteOptions } from "fastify";
import { getBooksById } from "../../bussines-logic";

export const getBooksByIdRoute: RouteOptions = {
  method: "GET",
  url: "/books/:uuid",
  handler: async (request, reply) => {
    const { params } = request;
    const { uuid } = params as { uuid: string };
    try {
      const obj = await getBooksById(uuid);
      reply.status(200).send(obj);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
