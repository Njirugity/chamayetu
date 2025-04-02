import { useState, useEffect } from "react";
import "../Contributions/Contributions.css";
import SidePage from "./RepaymentForm";
import { LoanRepayment } from "../../models/Repayment";

function RepaymentTable() {
  const [repayments, setRepayments] = useState<LoanRepayment[]>([]); 
  const [showForm, setForm] = useState(false);

  const formatDate = (isoDate: string) => {
    return new Date(isoDate).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Fetch loan repayments from API when component mounts
  useEffect(() => {
    const fetchRepayments = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/rest/loanrepayment/getLoanRepayments"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch loan repayments");
        }

        const data: LoanRepayment[] = await response.json();
        setRepayments(data); // Set fetched repayments to state
      } catch (error) {
        console.error("Error fetching loan repayments:", error);
      }
    };

    fetchRepayments();
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <>
      <div className="contributionDetails">
        <div className="title">
          <h4>Loan Repayments</h4>
          <button onClick={() => setForm(true)}>Receive Repayment</button>
          {showForm && <SidePage onClose={() => setForm(false)} />}
        </div>

        <div className="contributionsTable">
          <table className="tableRoot">
            <thead>
              <tr className="tableHead">
                {/* <th className="tableItem">Repayment ID</th> */}
                <th className="tableItem">Member ID</th>
                <th className="tableItem">Loan ID</th>
                <th className="tableItem">Amount</th>
                <th className="tableItem">Created At</th>
                <th className="tableItem">Modified At</th>
              </tr>
            </thead>
            <tbody>
              {repayments.length > 0 ? (
                repayments.map((repayment, index) => (
                  <tr key={index}>
                    {/* <td className="tableItem">{repayment.repayment_id}</td> */}
                    <td className="tableItem">{repayment.member_id}</td>
                    <td className="tableItem">{repayment.loan_id}</td>
                    <td className="tableItem">{repayment.amount}</td>
                    <td className="tableItem">{formatDate(repayment.created_at)}</td>
                    <td className="tableItem">{formatDate(repayment.modified_at)}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="tableItem">
                    No repayments found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default RepaymentTable;
