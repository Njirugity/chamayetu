import "./Members.css";
import MemberDetails from "./MemberDetails";
import React, { useState } from "react";
type Member = {
  firstname: string;
  lastname: string;
  memberId: string;
  contact: string;
  email: string;
  isAdmin: boolean;
};

const MemberForm: React.FC = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [formData, setFormData] = useState<Member>({
    firstname: "",
    lastname: "",
    memberId: "",
    contact: "",
    email: "",
    isAdmin: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "isAdmin" ? value === "true" : value, // Convert to boolean
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.firstname ||
      !formData.lastname ||
      !formData.memberId ||
      !formData.contact ||
      !formData.email
    ) {
      alert("All fields are required!");
      return;
    }

    setMembers([...members, formData]);
    setFormData({
      firstname: "",
      lastname: "",
      memberId: "",
      contact: "",
      email: "",
      isAdmin: false,
    });
  };

  return (
    <div className="formContainer">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          placeholder="Enter First Name"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
        />
        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          placeholder="Enter Last Name"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
        />

        <label htmlFor="memberId">Member ID</label>
        <input
          type="text"
          placeholder="Enter Member ID"
          name="memberId"
          value={formData.memberId}
          onChange={handleChange}
        />

        <label htmlFor="contact">Phone Number</label>
        <input
          type="text"
          placeholder="Enter Phone Number"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="Enter Email Address"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="isAdmin">Is Admin?</label>
        <select
          name="isAdmin"
          value={String(formData.isAdmin)}
          onChange={handleChange}
        >
          <option value="false">False</option>
          <option value="true">True</option>
        </select>
        <button type="submit">Submit</button>
      </form>
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
