export type PartialUser = Partial<User>

export interface User {
  uuid: string;
  name: string;
  lastname: string;
  email: string;
  phone: string;
  photo: string;
  password: string;
  institution: string;
  status: string;
}
