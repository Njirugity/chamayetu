package com.chamayetu.chamayetu.pojo;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

public interface LoansResponse {
    String getLoanId();
    String getMemberId();
    BigDecimal getAmount();
    BigDecimal getInterestRate();
    LocalDate getDueDate();
    String getLoanStatus();
    BigDecimal getLoanBalance();
    LocalDateTime getCreatedAt();
    LocalDateTime getModifiedAt();
    String getFullName();
}
