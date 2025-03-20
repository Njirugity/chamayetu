import SearchBar from "../../components/Searchbar";
import "./Members.css";

type Member = {
  firstname: string;
  lastname: string;
  memberId: string;
  contact: string;
};

type MemberTableProps = {
  members: Member[];
};
const MemberDetails: React.FC<MemberTableProps> = ({ members }) => {
  return (
    <>
      <SearchBar></SearchBar>
      <div className="membersContainer">
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
              {members.map((member, index) => (
                <tr key={index}>
                  <td className="tableItem">{member.firstname}</td>
                  <td className="tableItem">{member.memberId}</td>
                  <td className="tableItem">{member.contact}</td>
                  <td className="tableItem">$30000</td>
                  <td className="tableItem">$55000</td>
                  <td className="tableItem">$5000</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default MemberDetails;
