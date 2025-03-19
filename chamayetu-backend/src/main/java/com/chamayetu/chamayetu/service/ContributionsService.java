package com.chamayetu.chamayetu.service;

import com.chamayetu.chamayetu.pojo.ContributionsPOJO;
import org.springframework.http.ResponseEntity;

public interface ContributionsService {
    ResponseEntity<?> getShares(String member_no) throws Exception ;
    ResponseEntity<?> getTotalShares(String member_no) throws Exception ;
    ResponseEntity<?> postShares(ContributionsPOJO contributionsPOJO) throws Exception ;
}
