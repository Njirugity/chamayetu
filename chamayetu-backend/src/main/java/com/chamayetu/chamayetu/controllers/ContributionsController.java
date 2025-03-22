package com.chamayetu.chamayetu.controllers;

import com.chamayetu.chamayetu.pojo.ContributionsPOJO;
import com.chamayetu.chamayetu.service.ContributionsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/rest/contributions/")
public class ContributionsController {
    @Autowired
    ContributionsService contributionsServiceService;
    @GetMapping( "contributionsInfo/{member_id}")
    public ResponseEntity<?> contributionInfo(@PathVariable String member_id) throws Exception {
        return contributionsServiceService.getContributions(member_id);
    }
    @GetMapping("getTotalContribution/{member_id}")
    public ResponseEntity<?> getTotalContributions(@PathVariable String member_id) throws Exception {
        return contributionsServiceService.getTotalContributions(member_id);
    }
    @PostMapping( "postContribution")
    public ResponseEntity<?> addContribution(@RequestBody ContributionsPOJO contributionsPOJOPOJO) throws Exception {
        return contributionsServiceService.postContribution(contributionsPOJOPOJO);
    }

    @GetMapping( "allContributions")
    public ResponseEntity<?> allContributions() throws Exception {
        return contributionsServiceService.getAllContributions();
    }

}
