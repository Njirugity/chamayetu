package com.chamayetu.chamayetu.pojo;

import java.util.Date;

public class LoanPOJO {
    String user_modified ;
    String loan_id ;
    String member_no ;
    Integer loan_amount ;
    String payment_indicator  ;
    Integer repayment_amount ;
    Integer loan_balance ;
    Date repayment_date ;

    public String getUser_modified() {
        return user_modified;
    }

    public void setUser_modified(String user_modified) {
        this.user_modified = user_modified;
    }

    public String getLoan_id() {
        return loan_id;
    }

    public void setLoan_id(String loan_id) {
        this.loan_id = loan_id;
    }

    public String getMember_no() {
        return member_no;
    }

    public void setMember_no(String member_no) {
        this.member_no = member_no;
    }

    public Integer getLoan_amount() {
        return loan_amount;
    }

    public void setLoan_amount(Integer loan_amount) {
        this.loan_amount = loan_amount;
    }

    public String getPayment_indicator() {
        return payment_indicator;
    }

    public void setPayment_indicator(String payment_indicator) {
        this.payment_indicator = payment_indicator;
    }

    public Integer getRepayment_amount() {
        return repayment_amount;
    }

    public void setRepayment_amount(Integer repayment_amount) {
        this.repayment_amount = repayment_amount;
    }

    public Integer getLoan_balance() {
        return loan_balance;
    }

    public void setLoan_balance(Integer loan_balance) {
        this.loan_balance = loan_balance;
    }

    public Date getRepayment_date() {
        return repayment_date;
    }

    public void setRepayment_date(Date repayment_date) {
        this.repayment_date = repayment_date;
    }
}
