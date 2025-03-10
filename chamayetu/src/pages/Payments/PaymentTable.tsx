import "./Payment.css";
function PaymentTable() {
  return (
    <div className="paymentTable">
      <table className="tableRoot">
        <thead>
          <tr className="tableHead">
            <th className="tableItem">Date</th>
            <th className="tableItem">Member ID</th>
            <th className="tableItem">Member Name</th>
            <th className="tableItem">Category</th>
            <th className="tableItem">Loan</th>
            <th className="tableItem">Interest</th>
            <th className="tableItem">Paid</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="tableItem">2025-03-10</td>
            <td className="tableItem">001</td>
            <td className="tableItem">John Doe</td>
            <td className="tableItem">Personal</td>
            <td className="tableItem">$1000</td>
            <td className="tableItem">$50</td>
            <td className="tableItem">$500</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PaymentTable;
