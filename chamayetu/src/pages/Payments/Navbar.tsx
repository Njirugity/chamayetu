import { useState } from "react";

import "./Navbar.css";
function Navbar() {
  const [active, setActive] = useState("Active Loans");
  return (
    <>
      <nav className="theNavbar">
        <ul className="navList">
          {["Active Loan", "Cleared Loan", "Defaulted Loan"].map((item) => (
            <li
              key={item}
              className={`navListItem ${active === item ? "active" : ""}`}
              onClick={() => setActive(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}{" "}
              {/* Capitalize first letter */}
            </li>
          ))}
          {/* <li className="navListItem">Active Loans</li>
              <li className="navListItem">Paid Loans</li>
              <li className="navListItem">Defaulted Loan</li> */}
        </ul>
      </nav>
    </>
  );
}
export default Navbar;
