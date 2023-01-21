import { RouteOptions } from "fastify";
import { userSigninRoute } from "./signin";
import { userSignupRoute } from "./signup";


export const userRoutes: RouteOptions[] = [
    userSigninRoute,
    userSignupRoute
]