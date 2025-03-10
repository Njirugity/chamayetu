import "./Payment.css";
import PaymentTable from "./PaymentTable";
import Navbar from "./Navbar";

function Payment() {
  return (
    <>
      <div className="wrapper">
        <div className="container"></div>
        <div className="mainContent">
          <h4 className="groupName">Group Name</h4>
          <h1>Payments</h1>
          <Navbar></Navbar>
          <hr></hr>
          <div className="accountInfo">
            <h3 className="accountName">Account Name and Number</h3>
            <button className="bulkUpload">Upload file</button>
          </div>
          <button className="filterDate">Dates</button>

          {/* <input>From</input>
      <input>To</input>
      <input>Search</input> */}
          <PaymentTable></PaymentTable>
        </div>
      </div>
    </>
  );
}

export default Payment;
