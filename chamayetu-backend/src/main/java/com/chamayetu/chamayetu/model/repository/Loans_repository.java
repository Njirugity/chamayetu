package com.chamayetu.chamayetu.model.repository;

import com.chamayetu.chamayetu.model.Loans;
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

    @Query(nativeQuery = true, value = "SELECT * FROM LOANS WHERE loan_status IN ('Unpaid', 'Partially Paid')"
            + " ORDER BY due_date ASC")
    public List<Loans> fetchUnpaidLoans();
}
