import "./Payment.css";
import PaymentTable from "./PaymentTable";
import Navbar from "./Navbar";
import Header from "../../components/Header";
function Payment() {
  return (
    <>
      <div className="wrapper">
        <div className="mainContent">
          <Header></Header>
          <h1>Payments</h1>
          <Navbar></Navbar>
          <hr></hr>
          <div className="accountInfo">
            <h3 className="accountName">Account Name and Number</h3>
            <button className="bulkUpload">Upload file</button>
          </div>
          <button className="filterDate">
            {" "}
            Filter Dates <i className="bi bi-chevron-down"></i>
          </button>

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
