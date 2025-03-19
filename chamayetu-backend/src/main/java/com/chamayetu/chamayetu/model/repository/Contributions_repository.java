package com.chamayetu.chamayetu.model.repository;

import com.chamayetu.chamayetu.model.Contributions;
import com.chamayetu.chamayetu.pojo.Totals;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface Contributions_repository extends CrudRepository <Contributions, Long> {
    @Query(nativeQuery = true, value = "SELECT * FROM contributions WHERE MEMBER_ID = :member_id")
    public List<Contributions> fetchUserShares(@Param("member_id") String member_id);
    @Query(nativeQuery = true, value = "SELECT total_contributions as total FROM contributions " +
            "WHERE MEMBER_id =:member_id order by contribution_id desc limit 1")
    public List<Totals> getTotalShares(@Param("member_id") String member_id);
    @Query(nativeQuery = true, value = "SELECT total_contributions as total FROM contributions \" +\n" +
            "            \"WHERE MEMBER_id =:member_id order by contribution_id desc limit 1")
    public int getSumShares(@Param("member_id") String member_id);
}
