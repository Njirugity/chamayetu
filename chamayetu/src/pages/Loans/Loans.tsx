import "./Payment.css";
import LoansTable from "./LoansTable";
import Navbar from "./Navbar";
import Header from "../../components/Header";
import SidePage from "./LoansForm";
import { useState } from "react";


//Load the loans page dashboard
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
            <button onClick={() => setForm(true)} className="bulkUpload">
              Issue Loan
            </button>
            {showForm && <SidePage onClose={() => setForm(false)} />}
          </div>
          <button className="filterDate">
            {" "}
            Filter Dates <i className="bi bi-chevron-down"></i>
          </button>
          <LoansTable></LoansTable>
        </div>
      </div>
    </>
  );
}

export default Payment;
