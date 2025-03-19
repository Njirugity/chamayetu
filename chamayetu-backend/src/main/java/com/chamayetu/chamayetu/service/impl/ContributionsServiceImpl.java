package com.chamayetu.chamayetu.service.impl;

import com.chamayetu.chamayetu.model.Contributions;
import com.chamayetu.chamayetu.model.Members;
import com.chamayetu.chamayetu.model.repository.Members_repository;
import com.chamayetu.chamayetu.model.repository.Contributions_repository;
import com.chamayetu.chamayetu.pojo.ErrorResponse;
import com.chamayetu.chamayetu.pojo.ContributionsPOJO;
import com.chamayetu.chamayetu.pojo.Totals;
import com.chamayetu.chamayetu.service.ContributionsService;
import com.chamayetu.chamayetu.util.annotation.Facade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Facade
public class ContributionsServiceImpl implements ContributionsService {
    @Autowired
    private Contributions_repository contributionsRepository ;
    @Autowired
    private Members_repository membersRepository ;
    @Override
    public ResponseEntity<?> getShares(String member_id) throws Exception {
        List<Members> members  = membersRepository.fetchUserInfo(member_id);
        if(members.isEmpty()) {
            ErrorResponse errorResponse = new ErrorResponse();
            errorResponse.setErrorCode(404);
            errorResponse.setErrorMessage("User " + member_id + " does not exist");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
        }
//        List <Totals> totalShares = contributionsRepository.getTotalShares(member_no);
        List <Contributions> contributions = contributionsRepository.fetchUserShares(member_id) ;
        List<Contributions> sharesArrayList = new ArrayList<>(contributions);
        return ResponseEntity.status(HttpStatus.OK).body(sharesArrayList);
    }

    @Override
    public ResponseEntity<?> getTotalShares(String member_id) throws Exception {
        List<Members> members  = membersRepository.fetchUserInfo(member_id);
        if(members.isEmpty()) {
            ErrorResponse errorResponse = new ErrorResponse();
            errorResponse.setErrorCode(404);
            errorResponse.setErrorMessage("User " + member_id + " does not exist");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
        }
        List <Totals> totalShares = contributionsRepository.getTotalShares(member_id);
        return ResponseEntity.status(HttpStatus.OK).body(totalShares);
    }

    @Override
    public ResponseEntity<?> postShares(ContributionsPOJO contributionsPOJOPOJO) throws Exception {
        List<Members> members  = membersRepository.fetchUserInfo(contributionsPOJOPOJO.getMember_id().toUpperCase());
        if(members.isEmpty()) {
            ErrorResponse errorResponse = new ErrorResponse();
            errorResponse.setErrorCode(404);
            errorResponse.setErrorMessage("User " + contributionsPOJOPOJO.getMember_id().toUpperCase() + " does not exist");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
        }
        Contributions contribution = new Contributions();
        contribution.setMember_id(contributionsPOJOPOJO.getMember_id());
        contribution.setAmount(contributionsPOJOPOJO.getAmount());
        contribution.setDate_modified(LocalDateTime.now());
        contributionsRepository.save(contribution);
        return ResponseEntity.status(HttpStatus.OK).body(contribution);
    }
}
