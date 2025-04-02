export type Loan = {
  member_id: string;
  repayment_date: Date;
  loan_amount: number;
};

export type LoanDashboard = {
  created_at: string;      
  modified_at: string;      
  loan_id: number;          
  member_id: string;        
  due_date: string;         
  amount: number;           
  loan_status: string;     
  loan_balance: number;     
  interest_rate: number; 
}

