import { RouteOptions } from "fastify";
import { userSignup } from "../../bussines-logic";
import { User } from "../../types";

export const userSignupRoute: RouteOptions = {
  method: "POST",
  url: "/user-signup",
  handler: async (request, reply) => {
    const { body } = request;
    const data = body as User;
    try {
      const user = await userSignup(data);
      reply.status(200).send(user);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
