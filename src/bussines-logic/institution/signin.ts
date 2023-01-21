import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Collection, getModel } from '../../constants-definitions';
import { InsitutionSchemaMongo } from '../../types';

export const institutionSignin = async (uuid:string, password:string): Promise<any> => {
    const model = await getModel(Collection.INSTITUTIONS, InsitutionSchemaMongo)

    const institution = await model.findOne({uuid: uuid});

    if(!institution) { return new Error("institution no existe o esta inactiva");}

    const match = await bcrypt.compare(password, institution.password);

    if(!match) { return new Error("Contraseña incorrecta");}

    const token = jwt.sign({uuid: institution.uuid}, process.env.JWT_SECRET_KEY || "", {});

    return {
        token,
        ...institution._doc
    };
}