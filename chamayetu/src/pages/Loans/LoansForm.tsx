import "./Payment.css";
import React, { useState } from "react";
import { Loan } from "../../models/Loans";
import Popup from "../../components/PopUp/PopUp";

export const LoanForm: React.FC = () => {
  const [popupMessage, setPopupMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState<Loan>({
    repayment_date: new Date(),
    member_id: "",
    loan_amount: 0,
  });

  // Handle input changes
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]:
        name === "loan_amount"
          ? value
            ? Number(value)
            : ""
          : name === "repayment_date"
          ? new Date(value)
          : value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!formData.member_id || !formData.loan_amount || !formData.repayment_date) {
      setPopupMessage("All fields are required!");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:8080/rest/loans/postLoan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          repayment_date: formData.repayment_date.toISOString().split("T")[0], // Convert Date to string
        }),
      });
  
      const responseData = await response.json(); // Parse response JSON
  
      if (!response.ok) {
        // If API returns an error message, show it in popup
        setPopupMessage(responseData.errorMessage || "Failed to submit loan");
        return;
      }
  
      setPopupMessage("Loan submitted successfully!");
  
      // Reset form
      setFormData({
        repayment_date: new Date(),
        member_id: "",
        loan_amount: 0,
      });
  
    } catch (error) {
      setPopupMessage("Error submitting loan. Please try again.");
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
          required
        />

        <label htmlFor="loan_amount">Loan Amount</label>
        <input
          type="number"
          placeholder="Enter Loan Amount"
          name="loan_amount"
          value={formData.loan_amount === 0 ? "" : formData.loan_amount}
          onChange={handleChange}
          required
        />

        <label htmlFor="repayment_date">Repayment Date</label>
        <input
          type="date"
          name="repayment_date"
          value={formData.repayment_date.toISOString().split("T")[0]} // Convert date to string format
          onChange={handleChange}
          required
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
      <LoanForm />
    </div>
  );
};

export default SidePage;
