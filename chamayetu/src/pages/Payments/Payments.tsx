import "./Payment.css";
import PaymentTable from "./PaymentTable";
import Navbar from "./Navbar";
import Header from "../../components/Header";
import ConForm from "./Sidepage";
import { useState } from "react";

function Payment() {
  const [showForm, setForm] = useState(false);
  return (
    <>
      <div className="wrapper">
        <div className="mainContent">
          <Header></Header>
          <h1>Loans</h1>
          <Navbar></Navbar>
          <hr></hr>
          <div className="accountInfo">
            <h3 className="accountName">Account Name and Number</h3>
            <button className="bulkUpload" onClick={() => setForm(true)}>
              Recieve Payment
            </button>
            {showForm && <ConForm onClose={() => setForm(false)} />}
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
