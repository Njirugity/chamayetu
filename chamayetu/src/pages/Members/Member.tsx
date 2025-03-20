import { useState } from "react";
import Header from "../../components/Header";
import Dashboard from "./MemberDashboard";
import MemberDetails from "./MemberDetails";

type Member = {
  firstname: string;
  lastname: string;
  memberId: string;
  contact: string;
  email: string;
};

function Members() {
  const [members, setMembers] = useState<Member[]>([]);
  return (
    <>
      <Header></Header>
      <hr></hr>
      <Dashboard></Dashboard>
      <MemberDetails members={members}></MemberDetails>
    </>
  );
}

export default Members;
