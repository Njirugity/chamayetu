import { useState } from "react";
import { FaChevronDown, FaChevronRight, FaCog, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(true);

  const menuItems = [
    { name: "Home", path: "/home" },
    { name: "Members", path: "/members" },
    { name: "Loans", path: "/loans" },
    { name: "Contributions", path: "/contributions" },
    { name: "Loan Repayments", path: "/repayments" },
    { name: "Settings", path: "/settings" },
    { name: "Logout", path: "/logout" },
  ];

  return (
    <div className="sidebar">
      {/* Logo and New Button */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold">chamayetu</h2>
        <button className="btn-new">
          <FaPlus className="mr-2" /> New
        </button>
      </div>

      {/* Menu Items */}
      <div className="space-y-3">
        <div
          className="text-sm font-semibold flex items-center cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          MENU{" "}
          <FaChevronDown
            className={`ml-2 text-xs transition-transform ${
              menuOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
        {menuOpen && (
          <div className="menu">
            {menuItems.map(({ name, path }, index) => (
              <div
                key={index}
                onClick={() => navigate(path)}
                className="menu-item"
              >
                <FaChevronRight className="mr-2 text-xs" /> {name}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Menu Settings */}
      <div className="settings">
        <button className="settings-btn">Menu settings</button>
      </div>
    </div>
  );
};

export default Sidebar;
