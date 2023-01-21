import { RouteOptions } from "fastify";
import { deleteBook } from "../../bussines-logic";

type Params = {
  uuid: string;
};

export const deleteBookByIdRoute: RouteOptions = {
  method: "DELETE",
  url: "/books/:uuid",
  handler: async (request, reply) => {
    const { params } = request;
    const { uuid } = params as Params;
    try {
      const deleted = await deleteBook(uuid);
      reply.send(deleted);
    } catch (err) {
      if (err instanceof Error) {
        reply.send(500).send(err.message);
      }
    }
  },
};
