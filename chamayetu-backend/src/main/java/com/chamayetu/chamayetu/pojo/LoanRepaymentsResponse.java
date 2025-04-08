package com.chamayetu.chamayetu.pojo;

import java.math.BigDecimal;
import java.time.LocalDateTime;

public interface LoanRepaymentsResponse {
    String getLoanId();
    String getMemberId();
    BigDecimal getAmount();
    LocalDateTime getCreatedAt();
    LocalDateTime getModifiedAt();
    String getRepaymentId();
    String getFullName();
}

