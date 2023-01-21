import { RouteOptions } from "fastify";
import { deleteBorrower } from "../../bussines-logic";

type Params = {
  uuid: string;
};

export const deleteBorrowerByIdRoute: RouteOptions = {
  method: "DELETE",
  url: "/borrowers/:uuid",
  handler: async (request, reply) => {
    const { params } = request;
    const { uuid } = params as Params;
    try {
      const deleted = await deleteBorrower(uuid);
      reply.send(deleted);
    } catch (err) {
      if (err instanceof Error) {
        reply.send(500).send(err.message);
      }
    }
  },
};
