import fastifyCors from "@fastify/cors";
import * as dotenv from "dotenv";
dotenv.config();

import fastify from "fastify";
import { initDataSources } from "../data-sources";
import { registerRoutes } from "../routes";

const PORT = (process.env.PORT || 4200) as number;
const HOST = "0.0.0.0";

(async () => {
  await initDataSources({
    mongoose: {
      mongoUrl: process.env.MONGODB_URL as string,
    },
  });

  const server = fastify({
    logger: true,
  });

  server.register(
    (instance, options, next) => {
      registerRoutes(instance);
      next();
    },
    { prefix: "api/v1" }
  );

  server.register(fastifyCors, {
    origin: true,
  });

  const serverAddress = await server.listen({ port: PORT, host: HOST }, () => {
    server.log.info(`Backend App is running at http://localhost:${PORT}`);
    server.log.info("Press CTRL-c to stop");
  });

  
})();
