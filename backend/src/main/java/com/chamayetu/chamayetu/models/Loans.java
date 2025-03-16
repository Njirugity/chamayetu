package com.chamayetu.chamayetu.models;

import jakarta.persistence.Column;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Table(name = "loans")
public class Loans {
    @Id
    @Column(name = "loan_id")
    private String loan_id;
    @Column(name = "amount")
    private BigDecimal amount;
    @Column(name = "interest_rate")
    private BigDecimal interest;
    @Column(name = "date")
    private LocalDateTime date;
    @Column(name = "loan_status")
    private String loan_status;
    @Column(name = "loan_balance")
    private BigDecimal loan_balance;
    @Column(name = "created_at")
    private LocalDateTime created_at;
    @Column(name = "modified_at")
    private LocalDateTime modified_at;
}
