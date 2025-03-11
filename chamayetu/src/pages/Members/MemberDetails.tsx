import SearchBar from "../../components/Searchbar";
function MemberDetails() {
  return (
    <>
      <div className="membersContainer">
        <SearchBar></SearchBar>
        <div className="memberTable">
          <table className="tableRoot">
            <thead>
              <tr className="tableHead">
                <th className="tableItem">Name</th>
                <th className="tableItem">Member ID</th>
                <th className="tableItem">Contact</th>
                <th className="tableItem">Contributions</th>
                <th className="tableItem">Loan balance</th>
                <th className="tableItem">Loan limit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="tableItem">John Doe</td>
                <td className="tableItem">001</td>
                <td className="tableItem">0707090465</td>
                <td className="tableItem">$30000</td>
                <td className="tableItem">$55000</td>
                <td className="tableItem">$5000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default MemberDetails;
