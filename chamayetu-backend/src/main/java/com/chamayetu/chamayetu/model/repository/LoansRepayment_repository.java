package com.chamayetu.chamayetu.model.repository;

import com.chamayetu.chamayetu.model.LoansRepayment;
import com.chamayetu.chamayetu.pojo.LoanRepaymentsResponse;
import com.chamayetu.chamayetu.pojo.LoansResponse;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface LoansRepayment_repository extends CrudRepository <LoansRepayment, Long> {

    @Query(value = "SELECT l.loan_id, l.member_id, l.amount, " +
            "l.created_at, l.modified_at, l.repayment_id, " +
            "(first_name || ' ' || last_name) AS full_name " +
            "FROM loan_repayments l " +
            "LEFT JOIN members m ON m.member_id = l.member_id "
            , nativeQuery = true)
    List<LoanRepaymentsResponse> fetchLoanRepayments();

}
