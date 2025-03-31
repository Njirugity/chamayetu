import { useState } from "react";
import "./Login.css";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    groupName: "",
    numberOfMembers: "",
    groupPurpose: "investment",
    adminName: "",
    adminEmail: "",
    adminMemberNumber: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="signup-page">
      <div className="signup-cont">
        <form onSubmit={handleSubmit} className="signup-content">
          <h2>Group Signup</h2>
          <label>Group Name:</label>
          <input
            type="text"
            name="groupName"
            value={formData.groupName}
            onChange={handleChange}
            required
          />
          <label>Number of Members:</label>
          <input
            type="number"
            name="numberOfMembers"
            value={formData.numberOfMembers}
            onChange={handleChange}
            required
          />
          <label>Group Purpose:</label>
          <select
            name="groupPurpose"
            value={formData.groupPurpose}
            onChange={handleChange}
          >
            <option value="investment">Investment</option>
            <option value="savings">Savings</option>
            <option value="bodaboda">Bodaboda</option>
          </select>
          <label>Admin Name:</label>
          <input
            type="text"
            name="adminName"
            value={formData.adminName}
            onChange={handleChange}
            required
          />
          <label>Admin Email:</label>
          <input
            type="email"
            name="adminEmail"
            value={formData.adminEmail}
            onChange={handleChange}
            required
          />
          <label>Admin Member Number:</label>
          <input
            type="text"
            name="adminMemberNumber"
            value={formData.adminMemberNumber}
            onChange={handleChange}
            required
          />
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
