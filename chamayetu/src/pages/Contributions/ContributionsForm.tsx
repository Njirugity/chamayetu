import "../Members/Members.css";
import React, { useState } from "react";
import { Contribution } from "../../models/Contribution";
import Popup from "../../components/PopUp/PopUp";

export const ContributionForm: React.FC = () => {
  const [popupMessage, setPopupMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState<Contribution>({
    date: "",
    first_name: "",
    last_name: "",
    member_id: "",
    amount: 0,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: name === "amount" ? Number(value) : value, // Convert amount to number
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.date ||
      !formData.first_name ||
      !formData.last_name ||
      !formData.member_id ||
      !formData.amount
    ) {
      setPopupMessage("All fields are required!");
      return;
    }
    // Send data to parent component
    setPopupMessage(null);
    setFormData({
      date: "",
      first_name: "",
      last_name: "",
      member_id: "",
      amount: 0,
    });
  };
  return (
    <div className="formContainer">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="date">Date</label>
        <input
          type="text"
          placeholder="Enter Payment date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        <label htmlFor="first_name">First Name</label>
        <input
          type="text"
          placeholder="Enter First Name"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
        />
        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          placeholder="Enter Last Name"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
        />

        <label htmlFor="memberId">Member ID</label>
        <input
          type="text"
          placeholder="Enter Member ID"
          name="member_id"
          value={formData.member_id}
          onChange={handleChange}
        />

        <label htmlFor="contact">Amount</label>
        <input
          type="text"
          placeholder="Enter Phone Number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>

      {popupMessage && (
        <Popup message={popupMessage} onClose={() => setPopupMessage(null)} />
      )}
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
      <ContributionForm />
    </div>
  );
};

export default SidePage;
