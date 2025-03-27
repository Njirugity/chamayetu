import { useState } from "react";
import "./Contributions.css";
import ConForm from "./Sidepage";

function ContribDash() {
  const [showForm, setForm] = useState(false);
  return (
    <>
      <div className="contributionDetails">
        <div className="title">
          <h4>Contributions</h4>
          <button onClick={() => setForm(true)}>Recieve Contribution</button>
          {showForm && <ConForm onClose={() => setForm(false)} />}
        </div>

        <hr></hr>
        <div className="contributionsTable">
          <table className="tableRoot">
            <thead>
              <tr className="tableHead">
                <th className="tableItem">Date</th>
                <th className="tableItem">Member ID</th>
                <th className="tableItem">Name</th>
                <th className="tableItem">Amount</th>
                <th className="tableItem">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="tableItem">11/03/2025</td>
                <td className="tableItem">001</td>
                <td className="tableItem">John Doe</td>
                <td className="tableItem">0707090465</td>
                <td className="tableItem">Recieve Payment</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default ContribDash;
