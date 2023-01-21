import { RouteOptions } from "fastify";
import { updateBook } from "../../bussines-logic";
import { Book } from "../../types";

type Params = {
  uuid: string;
};

export const updateBookRoute: RouteOptions = {
  method: "PUT",
  url: "/books/:uuid",
  handler: async (request, reply) => {
    const { params } = request;
    const { uuid } = params as Params;
    const { body } = request;
    const { data } = body as { data: Book };
    try {
      const obj = await updateBook(uuid, data);
      reply.status(200).send(obj);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
