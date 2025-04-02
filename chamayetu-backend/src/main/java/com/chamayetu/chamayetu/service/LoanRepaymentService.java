package com.chamayetu.chamayetu.service;

import com.chamayetu.chamayetu.pojo.RepaymentPojo;
import org.springframework.http.ResponseEntity;

public interface LoanRepaymentService {
    ResponseEntity<?> getLoanRepayments() throws Exception;
    ResponseEntity<?> postLoanRepayment(RepaymentPojo repaymentPojo) throws Exception;
}
