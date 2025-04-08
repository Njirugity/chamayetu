package com.chamayetu.chamayetu.pojo;

import java.math.BigDecimal;
import java.time.LocalDateTime;

public interface ContributionsResponse {
    String getMemberId();
    String getFullName();
    BigDecimal getAmount();
    LocalDateTime getCreatedAt();
    LocalDateTime getModifiedAt();
    BigDecimal getTotalContributions();
}


