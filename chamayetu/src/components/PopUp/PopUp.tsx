import React from "react";
import { PopupProps } from "../../models/PopUpProps";
import "./PopUp.css";

const Popup: React.FC<PopupProps> = ({ message, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <p>{message}</p>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
};

export default Popup;
