import { useState, useEffect } from "react";
import "../Contributions/Contributions.css";
import SidePage from "./RepaymentForm";
import { Repayment } from "../../models/Repayment";

function RepaymentTable() {
  const [repayments, setRepayments] = useState<Repayment[]>([]);
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

  // Fetch repayments from API when component mounts
  useEffect(() => {
    const fetchRepayment = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/rest/repayments/allRepayment"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch repayments");
        }

        const data: Repayment[] = await response.json();
        setRepayments(data);
      } catch (error) {
        console.error("Error fetching repayments:", error);
      }
    };

    fetchRepayment();
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <>
      <div className="contributionDetails">
        <div className="title">
          <h4>Loan Repayemts</h4>
          <button onClick={() => setForm(true)}>Receive Repayment</button>
          {showForm && <SidePage onClose={() => setForm(false)} />}
        </div>

        <div className="contributionsTable">
          <table className="tableRoot">
            <thead>
              <tr className="tableHead">
                <th className="tableItem">Member ID</th>
                <th className="tableItem">Loan Amount</th>
                <th className="tableItem">Amount Due</th>
                <th className="tableItem">Total Interest</th>
                <th className="tableItem">Due Date</th>
                <th className="tableItem">Amount Paid</th>
                <th className="tableItem">Loan Balance</th>
              </tr>
            </thead>
            <tbody>
              {repayments.length > 0 ? (
                repayments.map((contrib, index) => (
                  <tr key={index}>
                    {/* <td className="tableItem">{formatDate(contrib.created_at)}</td> */}
                    <td className="tableItem">{contrib.member_id}</td>
                    <td className="tableItem">{contrib.amount}</td>
                    {/* <td className="tableItem">{contrib.total_contributions}</td> */}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="tableItem">
                    No contributions found.
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
