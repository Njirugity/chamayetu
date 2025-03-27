import memberRegistrion from "./images/memberRegistration.png";
import "./landing.css";
function LandingPage() {
  return (
    <>
      <div className="mainContainer">
        <div className="first-page">
          <div className="logins">
            <button className="login">Login</button>
            <button className="signup">Sign Up</button>
          </div>
          <div className="intro">
            <h1 className="title">chamayetu</h1>
            <div className="infos">
              <button className="demo">Request Demo</button>
              <button className="contact">Contact us</button>
            </div>
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
        </div>
        <div className="loans">
          <div className="explanations">
            <h3>Loan management</h3>
            <p>
              Allow members to apply for loans while tracking balances and
              repayment progress.
            </p>
          </div>
          <div className="placeholder"></div>
        </div>
      </div>
    </>
  );
}
export default LandingPage;
