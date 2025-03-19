package com.chamayetu.chamayetu.controllers;

import com.chamayetu.chamayetu.pojo.MemberRequest;
import com.chamayetu.chamayetu.pojo.ContributionsPOJO;
import com.chamayetu.chamayetu.service.ContributionsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rest/shares/")
public class SharesController {
    @Autowired
    ContributionsService sharesService;
    @RequestMapping( path = "sharesInfo/", method = RequestMethod.POST)
    public ResponseEntity<?> sharesInfo(@RequestBody MemberRequest memberRequest) throws Exception {
        return sharesService.getShares(memberRequest.getMember_no());
    }
    @RequestMapping( path = "getTotalShares/", method = RequestMethod.POST)
    public ResponseEntity<?> getTotalShares(@RequestBody MemberRequest memberRequest) throws Exception {
        return sharesService.getTotalShares(memberRequest.getMember_no());
    }
    @RequestMapping( path = "postShares/", method = RequestMethod.POST)
    public ResponseEntity<?> addShares(@RequestBody ContributionsPOJO sharesPOJO) throws Exception {
        return sharesService.postShares(sharesPOJO);
    }
}
