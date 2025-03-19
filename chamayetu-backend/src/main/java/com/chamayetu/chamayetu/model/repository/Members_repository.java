package com.chamayetu.chamayetu.model.repository;

import com.chamayetu.chamayetu.model.Members;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface Members_repository extends CrudRepository <Members, Long> {
    @Query(nativeQuery = true, value = "SELECT * FROM members WHERE member_id = :member_id")
    public List<Members> fetchUserInfo(@Param("member_id") String member_id);
    @Query(nativeQuery = true, value = "SELECT * FROM members WHERE EMAIL = :email")
    public List<Members> findUserByEmail(@Param("email") String email);
}
