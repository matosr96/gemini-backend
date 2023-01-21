export type PartialBorrower = Partial<Borrower>

export interface Borrower {
  uuid: string;
  name: string;
  lastname: string;
  ocupation: string;
  email: string;
  phone: string;
  photo: string;
  institution: string;
  status: string;
}
