import { useState } from "react";
import "./Contributions.css";
import SidePage from "./ContributionsForm";

import { Contribution } from "../../models/Contribution";

function ContribDash() {
  const [contributions, setContributions] = useState<Contribution[]>([]);
  const [showForm, setForm] = useState(false);
  return (
    <>
      <div className="contributionDetails">
        <div className="title">
          <h4>Contributions</h4>
          <button onClick={() => setForm(true)}>Recieve Contribution</button>
          {showForm && <SidePage onClose={() => setForm(false)} />}
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
              {contributions.map((contrib, index) => (
                <tr key={index}>
                  <td className="tableItem">{contrib.date}</td>
                  <td className="tableItem">{contrib.first_name}</td>
                  <td className="tableItem">{contrib.last_name}</td>
                  <td className="tableItem">{contrib.member_id}</td>
                  <td className="tableItem">{contrib.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default ContribDash;
