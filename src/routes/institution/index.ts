import { RouteOptions } from "fastify";
import { InstitutionCreateRoute } from "./create";
import { getInstitutionsByIdRoute } from "./get-by-id";
import { getOneInstitutionByIdRoute } from "./get-one";
import { InstitutionSigninRoute } from "./signin";
import { updateInstitutionRoute } from "./update";


export const institutionRoutes: RouteOptions[] = [
    InstitutionCreateRoute,
    InstitutionSigninRoute,
    updateInstitutionRoute,
    getInstitutionsByIdRoute,
    getOneInstitutionByIdRoute
]