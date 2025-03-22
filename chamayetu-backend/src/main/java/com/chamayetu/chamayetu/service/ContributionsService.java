package com.chamayetu.chamayetu.service;

import com.chamayetu.chamayetu.pojo.ContributionsPOJO;
import org.springframework.http.ResponseEntity;

public interface ContributionsService {
    ResponseEntity<?> getContributions(String member_no) throws Exception ;
    ResponseEntity<?> getTotalContributions(String member_no) throws Exception ;
    ResponseEntity<?> postContribution(ContributionsPOJO contributionsPOJO) throws Exception ;
    ResponseEntity<?> getAllContributions() throws Exception ;
}
