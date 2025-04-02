import { useState, useEffect } from "react";
import "./Contributions.css";
import SidePage from "./ContributionsForm";
import { ContributionDashboard } from "../../models/Contribution";


//The contribution dashboard. It contains the table and button to load the form
function ContribDash() {
  const [contributions, setContributions] = useState<ContributionDashboard[]>(
    []
  );
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

  // Fetch contributions from API when component mounts
  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/rest/contributions/allContributions"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch contributions");
        }

        const data: ContributionDashboard[] = await response.json();
        setContributions(data);
      } catch (error) {
        console.error("Error fetching contributions:", error);
      }
    };

    fetchContributions();
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <>
      <div className="contributionDetails">
        <div className="title">
          <h4>Contributions</h4>
          <button onClick={() => setForm(true)}>Receive Contribution</button>
          {showForm && <SidePage onClose={() => setForm(false)} />}
        </div>

        <div className="contributionsTable">
          <table className="tableRoot">
            <thead>
              <tr className="tableHead">
                <th className="tableItem">Contribution Date</th>
                <th className="tableItem">Member ID</th>
                <th className="tableItem">Amount</th>
                <th className="tableItem">Total Contributions</th>
              </tr>
            </thead>
            <tbody>
              {contributions.length > 0 ? (
                contributions.map((contrib, index) => (
                  <tr key={index}>
                    <td className="tableItem">
                      {formatDate(contrib.created_at)}
                    </td>
                    <td className="tableItem">{contrib.member_id}</td>
                    <td className="tableItem">{contrib.amount}</td>
                    <td className="tableItem">{contrib.total_contributions}</td>
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

export default ContribDash;
