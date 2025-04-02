package com.chamayetu.chamayetu.pojo;

import java.math.BigDecimal;

public class RepaymentPojo {
    String member_id;
    Long loan_id;
    BigDecimal amount;

    public String getMember_id() {
        return member_id;
    }

    public Long getLoan_id() {
        return loan_id;
    }

    public BigDecimal getAmount() {
        return amount;
    }
}
