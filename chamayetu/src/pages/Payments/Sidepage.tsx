import React from "react";
import "./sidepage.css"
interface ContributionFormProps {
  onClose: () => void;
}

const ConForm: React.FC<ContributionFormProps> = ({ onClose }) => {
  return (
    <div className="con-form">
      <button className="close-btn" onClick={onClose}>Close</button>
      <h2>Contribution Form</h2>
      <p>This is a form for contributions.</p>
    </div>
  );
};

export default ConForm;

