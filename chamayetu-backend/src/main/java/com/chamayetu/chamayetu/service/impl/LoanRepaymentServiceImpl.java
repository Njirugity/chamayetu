package com.chamayetu.chamayetu.service.impl;

import com.chamayetu.chamayetu.model.Loans;
import com.chamayetu.chamayetu.model.LoansRepayment;
import com.chamayetu.chamayetu.model.Members;
import com.chamayetu.chamayetu.model.repository.LoansRepayment_repository;
import com.chamayetu.chamayetu.model.repository.Loans_repository;
import com.chamayetu.chamayetu.model.repository.Members_repository;
import com.chamayetu.chamayetu.pojo.ErrorResponse;
import com.chamayetu.chamayetu.pojo.RepaymentPojo;
import com.chamayetu.chamayetu.service.LoanRepaymentService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class LoanRepaymentServiceImpl implements LoanRepaymentService {
    @Autowired
    private LoansRepayment_repository loanRepaymentRepository;
    @Autowired
    private Members_repository membersRepository ;
    @Autowired
    private Loans_repository loansRepository ;
    @Autowired
    private Environment env;


    @Override
    public ResponseEntity<?> getLoanRepayments() throws Exception {
        List <LoansRepayment> loanRepayments = (List<LoansRepayment>) loanRepaymentRepository.findAll();
        return ResponseEntity.status(HttpStatus.OK).body(loanRepayments);
    }

    @Override
    @Transactional
    public ResponseEntity<?> postLoanRepayment(RepaymentPojo repaymentPojo) throws Exception {
        //Check if member exists
        List<Members> members = membersRepository.fetchUserInfo(repaymentPojo.getMember_id());
        if(members.isEmpty()){
            ErrorResponse errorResponse = new ErrorResponse();
            errorResponse.setErrorCode(404);
            errorResponse.setErrorMessage("User " + repaymentPojo.getMember_id() + " does not exist");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
        }
        //Check if loan exists
        Optional<Loans> loans = loansRepository.findById(repaymentPojo.getLoan_id());
        if(loans.isEmpty()){
            ErrorResponse errorResponse = new ErrorResponse();
            errorResponse.setErrorCode(404);
            errorResponse.setErrorMessage("Loan ID " + repaymentPojo.getLoan_id() + " does not exist");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
        }
        Loans loan = loans.get();
        if (loan.getLoan_status().equals(env.getProperty("loans.paid.status"))){
            ErrorResponse errorResponse = new ErrorResponse();
            errorResponse.setErrorCode(400);
            errorResponse.setErrorMessage("Loan has already been paid");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
        }

        //Update loan balance and loan status
        if(loan.getLoan_balance().compareTo(repaymentPojo.getAmount()) == 0){
            loan.setLoan_balance(loan.getLoan_balance().subtract(repaymentPojo.getAmount()));
            loan.setLoan_status(env.getProperty("loans.paid.status"));
        }
        else if(loan.getLoan_balance().compareTo(repaymentPojo.getAmount()) > 0){
            loan.setLoan_balance(loan.getLoan_balance().subtract(repaymentPojo.getAmount()));
            loan.setLoan_status(env.getProperty("loans.partial.status"));
        }
        else{
            ErrorResponse errorResponse = new ErrorResponse();
            errorResponse.setErrorCode(400);
            errorResponse.setErrorMessage("Amount paid is more than the loan balance");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
        }
        //Save repayment
        LoansRepayment loansRepayment = new LoansRepayment();
        loansRepayment.setLoan_id(repaymentPojo.getLoan_id());
        loansRepayment.setAmount(repaymentPojo.getAmount());
        loansRepayment.setMember_id(repaymentPojo.getMember_id());
        loansRepayment.setCreated_at(LocalDateTime.now());
        loansRepayment.setModified_at(LocalDateTime.now());
        loanRepaymentRepository.save(loansRepayment);
        return ResponseEntity.status(HttpStatus.OK).body(loansRepayment);
    }
}
