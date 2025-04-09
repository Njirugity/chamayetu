import React from 'react';
import './LogoutPopup.css';

interface LogoutPopupProps {
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const LogoutPopup: React.FC<LogoutPopupProps> = ({ visible, onConfirm, onCancel }) => {
  if (!visible) return null;

  return (
    <div className="logout-popup-overlay">
      <div className="logout-popup-container">
        <h2 className="logout-popup-title">Confirm Logout</h2>
        <p className="logout-popup-message">Are you sure you want to log out?</p>
        <div className="logout-popup-buttons">
          <button onClick={onCancel} className="logout-btn cancel">Cancel</button>
          <button onClick={onConfirm} className="logout-btn confirm">Yes, Logout</button>
        </div>
      </div>
    </div>
  );
};

export default LogoutPopup;
