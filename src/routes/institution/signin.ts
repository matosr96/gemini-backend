import { RouteOptions } from "fastify";
import { institutionSignin } from "../../bussines-logic";
import { Institution } from "../../types";

export const InstitutionSigninRoute: RouteOptions = {
  method: "POST",
  url: "/institutions-signin",
  handler: async (request, reply) => {
    const { body } = request;
    const { uuid, password } = body as Institution;
    try {
      const obj = await institutionSignin(uuid, password);
      reply.status(200).send(obj);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
