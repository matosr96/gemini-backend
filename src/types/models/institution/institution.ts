export type PartialInstitution = Partial<Institution>

export interface Institution {
    uuid: string;
    name: string;
    nit: number;
    email: string;
    password: string;
    phone: string;
    photo: string;
    address: string;
    status: string;
  }