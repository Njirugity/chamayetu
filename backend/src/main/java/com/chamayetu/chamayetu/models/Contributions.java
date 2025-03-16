package com.chamayetu.chamayetu.models;

import jakarta.persistence.Column;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Table(name = "contributions")
public class Contributions {
    @Id
    @Column(name = "contribution_id")
    private String contributions_id;
    @Column(name = "amount")
    private BigDecimal amount;
    @Column(name = "created_at")
    private LocalDateTime created_at;
    @Column(name = "modified_at")
    private LocalDateTime modified_at;
    @Column(name = "total_contribution")
    private BigDecimal total_contribution;
}
