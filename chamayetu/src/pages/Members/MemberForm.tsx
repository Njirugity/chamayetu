import "./Members.css";
import React, { useState } from "react";
import { Member } from "../../models/Member";
import Popup from "../../components/PopUp/PopUp";

const MemberForm: React.FC = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [formData, setFormData] = useState<Member>({
    first_name: "",
    last_name: "",
    member_id: "",
    phone_number: "",
    email: "",
    password: "",
    confirm_password: "",
    is_admin: false,
    is_active: true,
  });

  const [popupMessage, setPopupMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "is_admin" ? value === "true" : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (
      !formData.first_name ||
      !formData.last_name ||
      !formData.member_id ||
      !formData.phone_number ||
      !formData.email
    ) {
      setPopupMessage("All fields are required!");
      return;
    }

    // Check if passwords match
    if (formData.password !== formData.confirm_password) {
      setPopupMessage("Passwords do not match!");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setPopupMessage("Please enter a valid email address.");
      return;
    }
  
    // Post request to register a new member
    try {
      const response = await fetch("http://localhost:8080/rest/members/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("Registration successful:", data);
      setPopupMessage("Registration successful!");
    } catch (error) {
      console.error("Error registering member:", error);
      setPopupMessage("Error registering member. Please try again.");
    }
  
    setMembers([...members, formData]);
    setFormData({
      first_name: "",
      last_name: "",
      member_id: "",
      phone_number: "",
      email: "",
      password: "",
      confirm_password: "",
      is_admin: false,
      is_active: true,
    });
  };

  return (
    <div className="formContainer">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="first_name">First Name</label>
        <input
          type="text"
          placeholder="Enter First Name"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          required
        />
        <label htmlFor="last_name">Last Name</label>
        <input
          type="text"
          placeholder="Enter Last Name"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          required
        />

        <label htmlFor="member_id">Member ID</label>
        <input
          type="text"
          placeholder="Enter Member ID"
          name="member_id"
          value={formData.member_id}
          onChange={handleChange}
          required
        />

        <label htmlFor="phone_number">Phone Number</label>
        <input
          type="text"
          placeholder="Enter Phone Number"
          name="phone_number"
          value={formData.phone_number}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Enter Email Address"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <label htmlFor="confirm_password">Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirm_password"
          value={formData.confirm_password}
          onChange={handleChange}
          required
        />
        <label htmlFor="is_admin">Is Admin?</label>
        <select
          name="is_admin"
          value={String(formData.is_admin)}
          onChange={handleChange}
          required
        >
          <option value="false">False</option>
          <option value="true">True</option>
        </select>
        <button type="submit">Submit</button>
      </form>

      {/* Popup Message */}
      {popupMessage && <Popup message={popupMessage} onClose={() => setPopupMessage(null)} />}
    </div>
  );
};

type SidePageProps = {
  onClose: () => void;
};

const SidePage: React.FC<SidePageProps> = ({ onClose }) => {
  return (
    <div className="side-page">
      <button className="close-btn" onClick={onClose}>
        Close
      </button>
      <MemberForm />
    </div>
  );
};

export default SidePage;
