import { useEffect, useState } from "react";
import "./Payment.css";
import { Loan } from "../../models/Loans";

function PaymentTable() {
  const [loans, setLoans] = useState<Loan[]>([]);
  return (
    <div className="paymentTable">
      <table className="tableRoot">
        <thead>
          <tr className="tableHead">
            <th className="tableItem">First Name</th>
            <th className="tableItem">Last Name</th>
            <th className="tableItem">Member Id</th>
            <th className="tableItem">Due Date</th>
            <th className="tableItem">Loan Amount</th>
            <th className="tableItem">Interest</th>
            <th className="tableItem">Loan Status</th>
            <th className="tableItem">Loan Balance</th>
          </tr>
        </thead>
        <tbody>
          {loans.map((loan, index) => (
            <tr key={index}>
              <td className="tableItem">{loan.first_name}</td>
              <td className="tableItem">{loan.last_name}</td>
              <td className="tableItem">{loan.member_id}</td>
              <td className="tableItem">{loan.due_date}</td>
              <td className="tableItem">{loan.amount}</td>
              <td className="tableItem"></td>
              <td className="tableItem"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PaymentTable;
