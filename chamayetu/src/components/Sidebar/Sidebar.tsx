import { useState } from "react";
import {
  FaChevronDown,
  FaChevronRight,
  FaPlus,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import LogoutPopup from "../LogoutPopUp/LogoutPopup";
import "./Sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(true);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  const menuItems = [
    { name: "Home", path: "/home" },
    { name: "Members", path: "/members" },
    { name: "Loans", path: "/loans" },
    { name: "Contributions", path: "/contributions" },
    { name: "Loan Repayments", path: "/repayments" },
    { name: "Settings", path: "/settings" },
    { name: "Logout", path: "" }, // no path needed
  ];

  const handleLogout = () => {
    console.log("Logging out...");
    // Perform logout logic here, e.g., clearing tokens or user data
    setShowLogoutPopup(false);
    navigate("/login");
  };

  return (
    <>
      <div className="sidebar">
        {/* Logo and New Button */}
        <div className="sidebar-header">
          <h2 className="sidebar-title">chamayetu</h2>
          <button className="btn-new">
            <FaPlus className="btn-icon" /> New
          </button>
        </div>

        {/* Menu Items */}
        <div className="sidebar-menu">
          <div
            className="menu-label"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            MENU{" "}
            <FaChevronDown
              className={`menu-chevron ${menuOpen ? "rotate" : ""}`}
            />
          </div>
          {menuOpen && (
            <div className="menu">
              {menuItems.map(({ name, path }, index) => (
                <div
                  key={index}
                  onClick={() =>
                    name === "Logout" ? setShowLogoutPopup(true) : navigate(path)
                  }
                  className="menu-item"
                >
                  <FaChevronRight className="menu-icon" /> {name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <LogoutPopup
        visible={showLogoutPopup}
        onConfirm={handleLogout}
        onCancel={() => setShowLogoutPopup(false)}
      />
    </>
  );
};

export default Sidebar;
