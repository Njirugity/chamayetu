package com.chamayetu.chamayetu.model;

import jakarta.persistence.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Table(name = "loans")
public class Loans {
    private LocalDateTime created_at ;
    private LocalDateTime modified_at ;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer loan_id ;
    private String member_id;
    private Date due_date ;
    private BigDecimal amount ;
    private String loan_status ;
    private BigDecimal loan_balance ;
    private Integer interest_rate;

    public LocalDateTime getCreated_at() {
        return created_at;
    }

    public void setCreated_at(LocalDateTime created_at) {
        this.created_at = created_at;
    }

    public LocalDateTime getModified_at() {
        return modified_at;
    }

    public void setModified_at(LocalDateTime modified_at) {
        this.modified_at = modified_at;
    }

    public Integer getLoan_id() {
        return loan_id;
    }

    public void setLoan_id(Integer loan_id) {
        this.loan_id = loan_id;
    }

    public String getMember_id() {
        return member_id;
    }

    public void setMember_id(String member_id) {
        this.member_id = member_id;
    }

    public Date getDue_date() {
        return due_date;
    }

    public void setDue_date(Date due_date) {
        this.due_date = due_date;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    public String getLoan_status() {
        return loan_status;
    }

    public void setLoan_status(String loan_status) {
        this.loan_status = loan_status;
    }

    public BigDecimal getLoan_balance() {
        return loan_balance;
    }

    public void setLoan_balance(BigDecimal loan_balance) {
        this.loan_balance = loan_balance;
    }

    public Integer getInterest_rate() {
        return interest_rate;
    }

    public void setInterest_rate(Integer interest_rate) {
        this.interest_rate = interest_rate;
    }
}
