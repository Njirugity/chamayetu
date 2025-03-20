import "./Members.css";
import SidePage from "./MemberForm";
import { useState } from "react";

function Dashboard() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <div className="dashboardContainer">
        <div className="title">
          <h4>Members</h4>
          <button onClick={() => setIsOpen(true)}>New Member</button>
          {isOpen && <SidePage onClose={() => setIsOpen(false)} />}
        </div>
        <div className="analytics">
          <div className="analyticsItem>">
            <h3>100</h3>
            <span>Number of Members</span>
            <div className="decor1"></div>
          </div>
          <div className="analyticsItem>">
            <h3>1</h3>
            <span>New members this month</span>
            <div className="decor2"></div>
          </div>
          <div className="analyticsItem>">
            <h3>Ksh 0</h3>
            <span>Total contributions</span>
            <div className="decor3"></div>
          </div>
          <div className="analyticsItem>">
            <h3>Ksh 0</h3>
            <span>Loans dispursed</span>
            <div className="decor4"></div>
          </div>
          <div className="analyticsItem>">
            <h3>Ksh 0</h3>
            <span>Paid loans</span>
            <div className="decor5"></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Dashboard;
