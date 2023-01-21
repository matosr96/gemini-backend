import { RouteOptions } from "fastify";
import { getInstitutionById } from "../../bussines-logic";

export const getOneInstitutionByIdRoute: RouteOptions = {
  method: "GET",
  url: "/institutions/:uuid",
  handler: async (request, reply) => {
    const { params } = request;
    const { uuid } = params as { uuid: string };
    try {
      const store = await getInstitutionById(uuid);
      reply.status(200).send(store);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
