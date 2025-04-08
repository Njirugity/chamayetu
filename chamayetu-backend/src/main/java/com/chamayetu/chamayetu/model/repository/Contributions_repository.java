package com.chamayetu.chamayetu.model.repository;

import com.chamayetu.chamayetu.model.Contributions;
import com.chamayetu.chamayetu.pojo.ContributionsResponse;
import com.chamayetu.chamayetu.pojo.Totals;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.math.BigDecimal;
import java.util.List;

public interface Contributions_repository extends CrudRepository <Contributions, Long> {
    @Query(nativeQuery = true, value = "SELECT * FROM contributions WHERE MEMBER_ID = :member_id order by contribution_id desc")
    public List<Contributions> fetchUserShares(@Param("member_id") String member_id);
    @Query(nativeQuery = true, value = "SELECT total_contributions as total FROM contributions " +
            "WHERE MEMBER_id =:member_id order by contribution_id desc limit 1")
    public Totals getTotalShares(@Param("member_id") String member_id);
    @Query(nativeQuery = true, value = "SELECT total_contributions as total FROM contributions \" +\n" +
            "            \"WHERE MEMBER_id =:member_id order by contribution_id desc limit 1")
    public BigDecimal getSumShares(@Param("member_id") String member_id);

    @Query(value = "SELECT c.member_id, (first_name || ' ' || last_name) AS full_name, c.amount, c.created_at, " +
            "c.modified_at, c.total_contributions FROM contributions c " +
            "LEFT JOIN members m ON c.member_id = m.member_id", nativeQuery = true)
    List<ContributionsResponse> getAllContributions();

}
