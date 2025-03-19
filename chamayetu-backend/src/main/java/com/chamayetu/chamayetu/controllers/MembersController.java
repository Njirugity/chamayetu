package com.chamayetu.chamayetu.controllers;

import com.chamayetu.chamayetu.service.MemberService;
import com.chamayetu.chamayetu.pojo.LoginPOJO;
import com.chamayetu.chamayetu.pojo.MemberRequest;
import com.chamayetu.chamayetu.pojo.UserProfile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/rest/members/")
public class MembersController {
    @Autowired
    MemberService memberService ;
    @RequestMapping( path = "getMemberInfo/{member_id}", method = RequestMethod.GET)
    public ResponseEntity<?> getMemberInfo(@PathVariable String member_id) throws Exception {
        return memberService.getMemberInfo(member_id);
    }

    @RequestMapping( path = "getMembers", method = RequestMethod.GET)
    public ResponseEntity<?> getAllMembers() throws Exception {
        return memberService.getMembers();
    }

    @RequestMapping( path = "login", method = RequestMethod.POST)
    public ResponseEntity<?> login(@RequestBody LoginPOJO loginPOJO) throws Exception {
        return memberService.login(loginPOJO);
    }
    @RequestMapping( path = "register", method = RequestMethod.POST)
    public ResponseEntity<?> register(@RequestBody UserProfile userProfile) throws Exception {
        return memberService.registerNewUser(userProfile);
    }
}
