import { useNavigate } from "react-router-dom";
import memberRegistrion from "./images/memberRegistration.png";
import contribution from "./images/contributions.png";
import loans from "./images/loans.png";
import bgImage from "./images/backgroundlogo.jpeg";

import "./landing.css";
//load the landing page
function LandingPage() {
  const navigate = useNavigate();
  const login = useNavigate();
  const signup = useNavigate();
  //handle navigation for try demo button
  const handleDemo = () => {
    navigate("/home");
  };
  //handle navigation for login button
  const handleLogin = () => {
    login("/login");
  };
  //handle navigation for sign up button
  const handleSignup = () => {
    signup("/signup");
  };

  return (
    <>
      <div className="mainContainer">
        <div className="first-page">
          <div className="logins">
            <button onClick={handleLogin} className="login">
              Login
            </button>
            <button onClick={handleSignup} className="signup">
              Sign Up
            </button>
          </div>
          <div className="intro">
            <h1 className="title">chamayetu</h1>
            <div className="infos">
              <button onClick={handleDemo} className="demo">
                Try Demo
              </button>
              <button className="contact">Contact us</button>
            </div>
            {/* <img
              className="backgroundImage"
              src={bgImage}
              alt="backround logo"
            /> */}
            <p className="defination">
              Managing group investments can be challenging, with multiple
              contributors, shared funds, and loan tracking. Our Group
              Investment System simplifies this process, offering a transparent,
              secure, and efficient way to manage collective investments.
            </p>
          </div>
          <div className="decor"></div>
        </div>
        <div className="members">
          <div className="explanations">
            <h3>Member Registration</h3>
            <p>
              Easily onboard new members and maintain a structured member
              database.
            </p>
          </div>
          <img
            className="back-img"
            src={memberRegistrion}
            alt="Member registraion"
          ></img>
        </div>
        <div className="contribution">
          <div className="explanations">
            <h3>Contribution Tracking</h3>
            <p>
              Monitor, record, and manage contributions in real-time for
              complete transparency.
            </p>
          </div>
          <img
            className="back-img"
            src={contribution}
            alt="Contributions"
          ></img>
        </div>
        <div className="loans">
          <div className="explanations">
            <h3>Loan management</h3>
            <p>
              Allow members to apply for loans while tracking balances and
              repayment progress.
            </p>
          </div>
          <img className="back-img" src={loans} alt="Loans"></img>
        </div>
      </div>
    </>
  );
}
export default LandingPage;
