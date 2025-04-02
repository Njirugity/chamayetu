export type Repayment = {
  member_id: string;
  loan_id: number;
  amount: number;
};

export interface LoanRepayment {
  repayment_id: number;
  amount: number;
  created_at: string;
  modified_at: string;
  loan_id: number;
  member_id: string;
}
