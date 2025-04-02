package com.chamayetu.chamayetu.service;

import com.chamayetu.chamayetu.pojo.LoanPOJO;
import org.springframework.http.ResponseEntity;

public interface LoansService {
    ResponseEntity<?> getLoans(String member_id) throws Exception ;
    ResponseEntity<?> getTotalLoans(String member_id) throws Exception ;
    ResponseEntity<?> postLoan(LoanPOJO loanPOJO) throws Exception ;
    ResponseEntity<?> getUnpaidLoans() throws Exception ;
}
