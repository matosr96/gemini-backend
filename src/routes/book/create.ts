import { RouteOptions } from "fastify";
import { createBook } from "../../bussines-logic";
import { Book } from "../../types";

export const createBookRoute: RouteOptions = {
  method: "POST",
  url: "/books",
  handler: async (request, reply) => {
    const { body } = request;
    const data = body as Book;
    try {
      const obj = await createBook(data);
      reply.status(201).send(obj);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
