import "../Members/Members.css";

import React, { useEffect, useState } from "react";

function PaymentForm() {
  return (
    <div className="formContainer">
      <form className="form">
        <label htmlFor="date">Date</label>
        <input type="text" placeholder="Enter oayment date" name="date" />
        <label htmlFor="first_name">First Name</label>
        <input type="text" placeholder="Enter First Name" name="firstname" />
        <label htmlFor="lastname">Last Name</label>
        <input type="text" placeholder="Enter Last Name" name="lastname" />

        <label htmlFor="memberId">Member ID</label>
        <input type="text" placeholder="Enter Member ID" name="memberId" />

        <label htmlFor="loan">Loan amount</label>
        <input type="number" placeholder="Enter Loan amount" name="loan" />
        <label htmlFor="loan">Interest amount</label>
        <input type="text" placeholder="Enter interest rate" name="interest" />
        <label htmlFor="loan">Amo</label>
        <input type="text" placeholder="Enter Loan amount" name="loan" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default PaymentForm;
