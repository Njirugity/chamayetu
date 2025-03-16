package com.chamayetu.chamayetu.models;

import jakarta.persistence.Column;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Table(name = "loan_repayments")
public class LoansRepayment {
    @Id
    @Column(name = "repayment_id")
    private String repayment_id;
    @Column(name = "amount")
    private BigDecimal amount;
    @Column(name = "created_at")
    private LocalDateTime created_at;
    @Column(name = "modified_at")
    private LocalDateTime modified_at;

}
