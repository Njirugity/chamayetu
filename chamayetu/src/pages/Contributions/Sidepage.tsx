import React from "react";
import "./sidepage.css";
import ContributionForm from "./ContributionsForm";

interface ContributionFormProps {
  onClose: () => void;
}

const ConForm: React.FC<ContributionFormProps> = ({ onClose }) => {
  return (
    <div className="con-form">
      <button className="close-btn" onClick={onClose}>
        Close
      </button>
      <h2>Contribution Form</h2>
      <ContributionForm />
    </div>
  );
};

export default ConForm;
