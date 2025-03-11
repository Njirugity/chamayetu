import "bootstrap-icons/font/bootstrap-icons.css";
import "./Home.css";

function Header() {
  return (
    <>
      <div className="header">
        <div className="nameAndIcons">
          <h4>Company Name Limited</h4>
          <div className="icons">
            <div className="iconContainer">
              <i className="bi bi-info-square"></i>
              <span>Help</span>
            </div>
            <div className="iconContainer">
              <i className="bi bi-search"></i>
              <span>Search</span>
            </div>
            <div className="iconContainer">
              <i className="bi bi-chat-right-text"></i>
              <span>Chat</span>
            </div>
            <div className="iconContainer">
              <i className="bi bi-gear"></i>
              <span>Settings</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
