import "./Payment.css";
import LoansTable from "./LoansTable";
import Navbar from "./Navbar";
import Header from "../../components/Header";
import { Loan } from "../../models/Loans";
import SidePage from "./LoansForm";
import { useState } from "react";


//Load the loans page dashboard
function Payment() {
  const [loans, setLoans] = useState<Loan[]>([]);
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

          {/* <input>From</input>
      <input>To</input>
      <input>Search</input> */}
          <LoansTable></LoansTable>
        </div>
      </div>
    </>
  );
}

export default Payment;
