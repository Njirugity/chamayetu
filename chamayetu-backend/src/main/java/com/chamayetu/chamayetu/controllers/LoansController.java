package com.chamayetu.chamayetu.controllers;

import com.chamayetu.chamayetu.service.LoansService;
import com.chamayetu.chamayetu.pojo.LoanPOJO;
import com.chamayetu.chamayetu.pojo.MemberRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/rest/loans/")
public class LoansController {
    @Autowired
    LoansService loansService;
    @GetMapping("getLoans/{member_id}")
    public ResponseEntity<?> loansInfo(@PathVariable String member_id) throws Exception {
        return loansService.getLoans(member_id);
    }
    @GetMapping("getTotalLoans/{member_id}")
    public ResponseEntity<?> totalLoans(@PathVariable String member_id) throws Exception {
        return loansService.getTotalLoans(member_id);
    }
    @PostMapping( "postLoan")
    public ResponseEntity<?> postLoan(@RequestBody LoanPOJO loanPOJO) throws Exception {
        return loansService.postLoan(loanPOJO);
    }

    @GetMapping("getUnpaidLoans")
    public ResponseEntity<?> unpaidLoans() throws Exception {
        return loansService.getUnpaidLoans();
    }

    @GetMapping("loanAnalytics")
    public ResponseEntity<?> loanAnalytics() throws Exception {
        return loansService.loanAnalytics();
    }
}
