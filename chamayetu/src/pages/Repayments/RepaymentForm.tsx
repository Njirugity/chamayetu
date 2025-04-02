import "../Members/Members.css";
import React, { useState } from "react";
import { Repayment } from "../../models/Repayment";
import Popup from "../../components/PopUp/PopUp";

export const RepaymentForm: React.FC = () => {
  const [popupMessage, setPopupMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState<Repayment>({
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

    if (!formData.member_id || !formData.amount) {
      setPopupMessage("All fields are required!");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:8080/rest/Repayments/postRepayment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json(); // Parse JSON response

      if (!response.ok) {
        throw new Error(data.errorMessage || "Failed to submit Repayment.");
      }

      setPopupMessage("Repayment submitted successfully!");

      // Reset the form after successful submission
      setFormData({
        member_id: "",
        amount: 0,
      });
    } catch (error: unknown) {
      let errorMessage = "An unexpected error occurred. Please try again.";

      if (error instanceof Error) {
        errorMessage = error.message;
      } else if (
        typeof error === "object" &&
        error !== null &&
        "message" in error
      ) {
        errorMessage = String(error.message);
      }

      setPopupMessage(errorMessage);
      console.error("Submission error:", error);
    }
  };

  return (
    <div className="formContainer">
      <form className="form" onSubmit={handleSubmit}>
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

      {/* Popup Message */}
      {popupMessage && (
        <Popup message={popupMessage} onClose={() => setPopupMessage(null)} />
      )}
    </div>
  );
};
type SidePageProps = {
  onClose: () => void;
};

//load the form on a side page inside the contribution page
const SidePage: React.FC<SidePageProps> = ({ onClose }) => {
  return (
    <div className="side-page">
      <button className="close-btn" onClick={onClose}>
        Close
      </button>
      <RepaymentForm />
    </div>
  );
};

export default SidePage;
