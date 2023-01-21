import { RouteOptions } from "fastify";
import { deleteLoan } from "../../bussines-logic";

type Params = {
  uuid: string;
};

export const deleteLoanByIdRoute: RouteOptions = {
  method: "DELETE",
  url: "/loans/:uuid",
  handler: async (request, reply) => {
    const { params } = request;
    const { uuid } = params as Params;
    try {
      const deleted = await deleteLoan(uuid);
      reply.send(deleted);
    } catch (err) {
      if (err instanceof Error) {
        reply.send(500).send(err.message);
      }
    }
  },
};
