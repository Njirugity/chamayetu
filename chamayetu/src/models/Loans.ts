export type Loan = {
  member_id: string;
  repayment_date: Date;
  loan_amount: number;
};

export type LoanDashboard = {
  createdAt: string;      
  modifiedAt: string;      
  loanId: number;          
  memberId: string;        
  dueDate: string;         
  amount: number;           
  loanStatus: string;     
  loanBalance: number;     
  interestRate: number; 
  fullName: string;
}

