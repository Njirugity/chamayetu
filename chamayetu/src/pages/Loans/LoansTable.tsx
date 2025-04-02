import { useEffect, useState } from "react";
import "./Payment.css";
import { LoanDashboard } from "../../models/Loans";

function LoansTable() {
  const [loans, setLoans] = useState<LoanDashboard[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Fetch loans from the API
  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/rest/loans/getUnpaidLoans"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch loans");
        }
        const data: LoanDashboard[] = await response.json();
        setLoans(data);
      } catch (err) {
        setError("Error fetching loans. Please try again.");
        console.error("Fetch error:", err);
      }
    };

    fetchLoans();
  }, []);

  return (
    <div className="paymentTable">
      {error && <p className="error-message">{error}</p>}
      <table className="tableRoot">
        <thead>
          <tr className="tableHead">
            <th className="tableItem">Member Id</th>
            <th className="tableItem">Due Date</th>
            <th className="tableItem">Loan Amount</th>
            <th className="tableItem">Interest Rate</th>
            <th className="tableItem">Loan Status</th>
            <th className="tableItem">Loan Balance</th>
          </tr>
        </thead>
        <tbody>
          {loans.map((loan) => (
            <tr key={loan.loan_id}>
              <td className="tableItem">{loan.member_id}</td>
              <td className="tableItem">
                {new Date(loan.due_date).toLocaleDateString()}
              </td>
              <td className="tableItem">{loan.amount.toFixed(2)}</td>
              <td className="tableItem">{loan.interest_rate}%</td>
              <td className="tableItem">{loan.loan_status}</td>
              <td className="tableItem">{loan.loan_balance.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LoansTable;
