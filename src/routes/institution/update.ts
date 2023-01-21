import { RouteOptions } from "fastify";
import { updateInstitution } from "../../bussines-logic";
import { Institution } from "../../types";

type Params = {
  uuid: string;
};

export const updateInstitutionRoute: RouteOptions = {
  method: "PUT",
  url: "/institutions/:uuid",
  handler: async (request, reply) => {
    const { params, body } = request;
    const { uuid } = params as Params;
    const { data } = body as { data: Institution };

    try {
      const obj = await updateInstitution(uuid, data);
      reply.status(200).send(obj);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
