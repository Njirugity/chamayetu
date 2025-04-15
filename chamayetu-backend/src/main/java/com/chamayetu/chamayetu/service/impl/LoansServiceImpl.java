package com.chamayetu.chamayetu.service.impl;

import com.chamayetu.chamayetu.model.Loans;
import com.chamayetu.chamayetu.model.Members;
import com.chamayetu.chamayetu.model.repository.Loans_repository;
import com.chamayetu.chamayetu.model.repository.Members_repository;
import com.chamayetu.chamayetu.model.repository.Contributions_repository;
import com.chamayetu.chamayetu.pojo.*;
import com.chamayetu.chamayetu.service.LoansService;
import com.chamayetu.chamayetu.util.annotation.Facade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
public class LoansServiceImpl implements LoansService {
    @Autowired
    private Loans_repository loansRepository ;
    @Autowired
    private Contributions_repository contributionsRepository ;
    @Autowired
    private Members_repository membersRepository ;
    @Autowired
    private Environment env;

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
    public ResponseEntity<?> getTotalLoans(String member_id) throws Exception {
        List<Members> members  = membersRepository.fetchUserInfo(member_id);
        if(members.isEmpty()) {
            ErrorResponse errorResponse = new ErrorResponse();
            errorResponse.setErrorCode(404);
            errorResponse.setErrorMessage("User " + member_id.toUpperCase() + " does not exist");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
        }
        List<Totals> totalLoans  = loansRepository.getTotalLoans(member_id.toUpperCase());
        return ResponseEntity.status(HttpStatus.OK).body(totalLoans);
    }

    @Override
    public ResponseEntity<?> postLoan(LoanPOJO loanPOJO) throws Exception {
        List<Members> members  = membersRepository.fetchUserInfo(loanPOJO.getMember_id().toUpperCase());
        if(members.isEmpty()) {
            ErrorResponse errorResponse = new ErrorResponse();
            errorResponse.setErrorCode(404);
            errorResponse.setErrorMessage("User " + loanPOJO.getMember_id().toUpperCase() + " does not exist");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
        }
        BigDecimal loan_balance = loansRepository.getTotal(loanPOJO.getMember_id().toUpperCase());
        BigDecimal total_shares = contributionsRepository.getSumShares(loanPOJO.getMember_id().toUpperCase());
        if (total_shares.multiply(BigDecimal.valueOf(2))
                .compareTo(loan_balance.add(loanPOJO.getLoan_amount())) < 0) {
            ErrorResponse errorResponse = new ErrorResponse();
            errorResponse.setErrorCode(417);
            errorResponse.setErrorMessage("User " + loanPOJO.getMember_id().toUpperCase() + " has exceeded their loan limit");
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(errorResponse);
        }
        else {
            Loans loan = new Loans();
            loan.setMember_id(loanPOJO.getMember_id().toUpperCase());
            loan.setAmount(loanPOJO.getLoan_amount());

            BigDecimal interestRate = new BigDecimal(Objects.requireNonNull(env.getProperty("loans.default.interest"))); // e.g., 10 for 10%

            // Calculate loan balance: Loan Amount + (Loan Amount * Interest Rate / 100)
            BigDecimal interestAmount = loanPOJO.getLoan_amount().multiply(interestRate).divide(BigDecimal.valueOf(100));
            loan.setLoan_balance(loanPOJO.getLoan_amount().add(interestAmount));

            loan.setLoan_status(env.getProperty("loans.default.status"));
            loan.setModified_at(LocalDateTime.now());
            loan.setCreated_at(LocalDateTime.now());
            loan.setInterest_rate(interestRate.intValue());
            loan.setDue_date(loanPOJO.getRepayment_date());

            loansRepository.save(loan);

            return ResponseEntity.status(HttpStatus.CREATED).body(loan);
        }
    }

    @Override
    public ResponseEntity<?> getUnpaidLoans() throws Exception {
        List<LoansResponse> loans  = loansRepository.fetchUnpaidLoans();
        return new ResponseEntity<>(loans, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<?> loanAnalytics() throws Exception {
        LoansSummary loansSummary = loansRepository.getLoanSummary();
        return ResponseEntity.status(HttpStatus.OK).body(loansSummary);
    }

    @Override
    public ResponseEntity<?> getDefaultedLoans() throws Exception {
        List<LoansResponse> loans  = loansRepository.fetchDefaultedLoans();
        return new ResponseEntity<>(loans, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<?> getClearedLoans() throws Exception {
        List<LoansResponse> loans  = loansRepository.fetchClearedLoans();
        return new ResponseEntity<>(loans, HttpStatus.OK);
    }
}
