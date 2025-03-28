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
    public ResponseEntity<?> getContributions(String member_id) throws Exception {
        List<Members> members  = membersRepository.fetchUserInfo(member_id);
        if(members.isEmpty()) {
            ErrorResponse errorResponse = new ErrorResponse();
            errorResponse.setErrorCode(404);
            errorResponse.setErrorMessage("User " + member_id + " does not exist");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
        }
        List <Contributions> contributions = contributionsRepository.fetchUserShares(member_id) ;
        List<Contributions> sharesArrayList = new ArrayList<>(contributions);
        return ResponseEntity.status(HttpStatus.OK).body(sharesArrayList);
    }

    @Override
    public ResponseEntity<?> getTotalContributions(String member_id) throws Exception {
        List<Members> members  = membersRepository.fetchUserInfo(member_id);
        if(members.isEmpty()) {
            ErrorResponse errorResponse = new ErrorResponse();
            errorResponse.setErrorCode(404);
            errorResponse.setErrorMessage("User " + member_id + " does not exist");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
        }
        Totals totalShares = contributionsRepository.getTotalShares(member_id);
        return ResponseEntity.status(HttpStatus.OK).body(totalShares);
    }

    @Override
    public ResponseEntity<?> postContribution(ContributionsPOJO contributionsPOJO) throws Exception {
        List<Members> members  = membersRepository.fetchUserInfo(contributionsPOJO.getMember_id().toUpperCase());
        if(members.isEmpty()) {
            ErrorResponse errorResponse = new ErrorResponse();
            errorResponse.setErrorCode(404);
            errorResponse.setErrorMessage("User " + contributionsPOJO.getMember_id().toUpperCase() + " does not exist");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
        }
        //Get total contributions
        Totals totalShares = contributionsRepository.getTotalShares(contributionsPOJO.getMember_id().toUpperCase());
        //Save the contribution
        Contributions contribution = new Contributions();
        contribution.setMember_id(contributionsPOJO.getMember_id());
        contribution.setAmount(contributionsPOJO.getAmount());
        contribution.setModified_at(LocalDateTime.now());
        contribution.setTotal_contributions(
                (int) ((totalShares != null ? totalShares.getTotal() : 0) + contributionsPOJO.getAmount())
        );
        contribution.setCreated_at(LocalDateTime.now());
        contributionsRepository.save(contribution);
        return ResponseEntity.status(HttpStatus.OK).body(contribution);
    }

    @Override
    public ResponseEntity<?> getAllContributions() throws Exception {
        List<Contributions> contributions = (List<Contributions>) contributionsRepository.findAll();
        return ResponseEntity.status(HttpStatus.OK).body(contributions);
    }

}
