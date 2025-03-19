package com.chamayetu.chamayetu.service.impl;

import com.chamayetu.chamayetu.model.Loans;
import com.chamayetu.chamayetu.model.Members;
import com.chamayetu.chamayetu.model.repository.Loans_repository;
import com.chamayetu.chamayetu.model.repository.Members_repository;
import com.chamayetu.chamayetu.model.repository.Contributions_repository;
import com.chamayetu.chamayetu.pojo.ErrorResponse;
import com.chamayetu.chamayetu.pojo.LoanPOJO;
import com.chamayetu.chamayetu.pojo.Totals;
import com.chamayetu.chamayetu.service.LoansService;
import com.chamayetu.chamayetu.util.annotation.Facade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

@Facade
public class LoansServiceImpl implements LoansService {
    @Autowired
    private Loans_repository loansRepository ;
    @Autowired
    private Contributions_repository contributionsRepository ;
    @Autowired
    private Members_repository membersRepository ;
    @Override
    public ResponseEntity<?> getLoans(String member_no) throws Exception {
        List<Members> members  = membersRepository.fetchUserInfo(member_no);
        if(members.isEmpty()) {
            ErrorResponse errorResponse = new ErrorResponse();
            errorResponse.setErrorCode(404);
            errorResponse.setErrorMessage("User " + member_no.toUpperCase() + " does not exist");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
        }
        List<Loans> loans  = loansRepository.fetchUserLoans(member_no.toUpperCase());
        List<Loans> loansArray = new ArrayList<>(loans);
        return ResponseEntity.status(HttpStatus.OK).body(loansArray);
    }

    @Override
    public ResponseEntity<?> getTotalLoans(String member_no) throws Exception {
        List<Members> members  = membersRepository.fetchUserInfo(member_no);
        if(members.isEmpty()) {
            ErrorResponse errorResponse = new ErrorResponse();
            errorResponse.setErrorCode(404);
            errorResponse.setErrorMessage("User " + member_no.toUpperCase() + " does not exist");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
        }
        List<Totals> totalLoans  = loansRepository.getTotalLoans(member_no.toUpperCase());
        return ResponseEntity.status(HttpStatus.OK).body(totalLoans);
    }

    @Override
    public ResponseEntity<?> postLoan(LoanPOJO loanPOJO) throws Exception {
        List<Members> members  = membersRepository.fetchUserInfo(loanPOJO.getMember_no().toUpperCase());
        if(members.isEmpty()) {
            ErrorResponse errorResponse = new ErrorResponse();
            errorResponse.setErrorCode(404);
            errorResponse.setErrorMessage("User " + loanPOJO.getMember_no().toUpperCase() + " does not exist");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
        }
        int loan_balance = loansRepository.getTotal(loanPOJO.getMember_no().toUpperCase());
        int total_shares = contributionsRepository.getSumShares(loanPOJO.getMember_no().toUpperCase());
        if ((total_shares * 2) < (loan_balance + loanPOJO.getLoan_amount())) {
            ErrorResponse errorResponse = new ErrorResponse();
            errorResponse.setErrorCode(417);
            errorResponse.setErrorMessage("User " + loanPOJO.getMember_no().toUpperCase() + " has exceeded their loan limit");
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(errorResponse);
        }
        else {

        }
        return null;
    }
}
