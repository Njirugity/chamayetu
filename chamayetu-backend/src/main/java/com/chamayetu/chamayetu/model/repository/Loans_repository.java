package com.chamayetu.chamayetu.model.repository;

import com.chamayetu.chamayetu.model.Loans;
import com.chamayetu.chamayetu.pojo.LoansResponse;
import com.chamayetu.chamayetu.pojo.LoansSummary;
import com.chamayetu.chamayetu.pojo.Totals;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.math.BigDecimal;
import java.util.List;

public interface Loans_repository extends CrudRepository <Loans, Long> {
    @Query(nativeQuery = true, value = "SELECT * FROM LOANS WHERE member_id = :member_id" +
            " AND loan_status IN ('Unpaid', 'Partially Paid')")
    public List<Loans> fetchUserLoans(@Param("member_id") String member_id);
    @Query(nativeQuery = true, value = "SELECT sum(loan_balance) as total FROM LOANS " +
            "WHERE member_id = :member_id AND loan_status IN ('Unpaid', 'Partially Paid')")
    public List<Totals> getTotalLoans(@Param("member_id") String member_id);
    @Query(nativeQuery = true, value = "SELECT COALESCE(sum(loan_balance),0) as total FROM LOANS " +
            "WHERE member_id = :member_id AND loan_status IN ('Unpaid', 'Partially Paid')")
    public BigDecimal getTotal(@Param("member_id") String member_id);

    @Query(value = "SELECT l.loan_id, l.member_id, l.amount, l.interest_rate, l.due_date, " +
            "l.loan_status, l.loan_balance, l.created_at, l.modified_at, " +
            "(first_name || ' ' || last_name) AS full_name " +
            "FROM loans l " +
            "LEFT JOIN members m ON m.member_id = l.member_id " +
            "WHERE loan_status IN ('Unpaid', 'Partially Paid') " +
            "ORDER BY due_date ASC", nativeQuery = true)
    List<LoansResponse> fetchUnpaidLoans();

    @Query(value = "SELECT " +
            "SUM(CASE WHEN loan_status = 'Paid' THEN amount ELSE 0 END) AS clearedLoans, " +
            "SUM(CASE WHEN loan_status IN ('Unpaid', 'Partially Paid') THEN amount ELSE 0 END) AS activeLoans, " +
            "SUM(CASE WHEN loan_status = 'Defaulted' THEN amount ELSE 0 END) AS defaultedLoans " +
            "FROM loans", nativeQuery = true)
    LoansSummary getLoanSummary();

}
