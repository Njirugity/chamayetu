package com.chamayetu.chamayetu.controllers;

import com.chamayetu.chamayetu.pojo.RepaymentPojo;
import com.chamayetu.chamayetu.service.LoanRepaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/rest/loanrepayment/")
public class LoanRepaymentController {

    @Autowired
    LoanRepaymentService loanRepaymentService;

    @GetMapping("getLoanRepayments")
    public ResponseEntity<?> getLoanRepayments() throws Exception {

        return loanRepaymentService.getLoanRepayments();
    }

    @PostMapping("postLoanRepayment")
    public ResponseEntity<?> postLoanRepayment(@RequestBody RepaymentPojo repaymentPojo) throws Exception {
        return loanRepaymentService.postLoanRepayment(repaymentPojo);
    }
}
