import { RouteOptions } from "fastify";
import { getAllBorroers } from "../../bussines-logic";

export const getAllBorrowersRoute: RouteOptions = {
  method: "GET",
  url: "/borrowers",
  handler: async (request, reply) => {
    try {
      const obj = await getAllBorroers();
      reply.status(200).send(obj);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
