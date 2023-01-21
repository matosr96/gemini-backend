import { RouteOptions } from "fastify";
import { getAllBooks } from "../../bussines-logic";

export const getAllBooksRoute: RouteOptions = {
  method: "GET",
  url: "/books",
  handler: async (request, reply) => {
    const { params } = request;
    try {
      const obj = await getAllBooks();
      reply.status(200).send(obj);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
