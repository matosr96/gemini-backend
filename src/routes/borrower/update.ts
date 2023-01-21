import { RouteOptions } from "fastify";
import { updateBorrower } from "../../bussines-logic";
import { Borrower } from "../../types";

type Params = {
  uuid: string;
};

export const updateBorrowersRoute: RouteOptions = {
  method: "PUT",
  url: "/borrowers/:uuid",
  handler: async (request, reply) => {
    const { params } = request;
    const { uuid } = params as Params;
    const { body } = request;
    const { data } = body as { data: Borrower };
    try {
      const obj = await updateBorrower(uuid, data);
      reply.status(200).send(obj);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
