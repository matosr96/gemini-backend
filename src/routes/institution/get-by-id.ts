import { RouteOptions } from "fastify";
import { getInstitutionsById } from "../../bussines-logic";

export const getInstitutionsByIdRoute: RouteOptions = {
  method: "GET",
  url: "/institutions/:uuid",
  handler: async (request, reply) => {
    const { params } = request;
    const { uuid } = params as { uuid: string };
    try {
      const stores = await getInstitutionsById(uuid);
      reply.status(200).send(stores);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
