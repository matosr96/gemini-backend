export type PartialLoan = Partial<Loan>

export interface Loan {
    uuid: string;
    user: string;
    book: string;
    borrower: string;
    institution: string;
    loan_date: string;
    return_date: string;
    state: string;
}