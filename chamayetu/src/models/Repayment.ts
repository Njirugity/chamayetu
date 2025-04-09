export type Repayment = {
  member_id: string;
  loan_id: number;
  amount: number;
};

export interface LoanRepayment {
  repaymentId: number;
  amount: number;
  createdAt: string;
  modifiedAt: string;
  loanId: number;
  memberId: string;
  fullName: string;
}
