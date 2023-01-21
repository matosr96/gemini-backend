import { RouteOptions } from "fastify";
import { createInstitution } from "../../bussines-logic";
import { Institution } from "../../types";

export const InstitutionCreateRoute: RouteOptions = {
  method: "POST",
  url: "/institutions",
  handler: async (request, reply) => {
    const { body } = request;
    const data = body as Institution;
    try {
      const store = await createInstitution(data);
      reply.status(201).send(store);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
