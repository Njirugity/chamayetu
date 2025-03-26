import { useEffect, useState } from "react";
import SearchBar from "../../components/Searchbar";
import "./Members.css";
import { MemberInfo } from "../../models/Member";


const MemberDetails: React.FC = () => {
  const [members, setMembers] = useState<MemberInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch("http://localhost:8080/rest/members/getMembers");
        if (!response.ok) {
          throw new Error("Failed to fetch members");
        }
        const data = await response.json();
        setMembers(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  return (
    <>
      <SearchBar />
      <div className="membersContainer">
        {loading && <p>Loading members...</p>}
        {error && <p className="error">{error}</p>}
        {!loading && !error && (
          <div className="memberTable">
            <table className="tableRoot">
              <thead>
                <tr className="tableHead">
                  <th className="tableItem">Member ID</th>
                  <th className="tableItem">First Name</th>
                  <th className="tableItem">Last Name</th>
                  <th className="tableItem">Contact</th>
                  <th className="tableItem">Email</th>
                  <th className="tableItem">Is Active</th>
                </tr>
              </thead>
              <tbody>
                {members.map((member, index) => (
                  <tr key={index}>
                    <td className="tableItem">{member.member_id}</td>
                    <td className="tableItem">{member.first_name}</td>
                    <td className="tableItem">{member.last_name}</td>
                    <td className="tableItem">{member.phone_number}</td>
                    <td className="tableItem">{member.email}</td>
                    <td className="tableItem">{member.is_active ? "Yes" : "No"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default MemberDetails;
