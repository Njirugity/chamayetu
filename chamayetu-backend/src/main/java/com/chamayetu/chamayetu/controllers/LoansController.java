package com.chamayetu.chamayetu.controllers;

import com.chamayetu.chamayetu.service.LoansService;
import com.chamayetu.chamayetu.pojo.LoanPOJO;
import com.chamayetu.chamayetu.pojo.MemberRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rest/loans/")
public class LoansController {
    @Autowired
    LoansService loansService;
    @RequestMapping( path = "getLoans/", method = RequestMethod.POST)
    public ResponseEntity<?> loansInfo(@RequestBody MemberRequest memberRequest) throws Exception {
        return loansService.getLoans(memberRequest.getMember_no());
    }
    @RequestMapping( path = "getTotalLoans/", method = RequestMethod.POST)
    public ResponseEntity<?> totalLoans(@RequestBody MemberRequest memberRequest) throws Exception {
        return loansService.getTotalLoans(memberRequest.getMember_no());
    }
    @RequestMapping( path = "postLoan/", method = RequestMethod.POST)
    public ResponseEntity<?> postLoan(@RequestBody LoanPOJO loanPOJO) throws Exception {
        return loansService.postLoan(loanPOJO);
    }
}
