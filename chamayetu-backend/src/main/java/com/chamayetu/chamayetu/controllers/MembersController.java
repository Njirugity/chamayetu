package com.chamayetu.chamayetu.controllers;

import com.chamayetu.chamayetu.pojo.LogonPojo;
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
    @GetMapping("getMemberInfo/{member_id}")
    public ResponseEntity<?> getMemberInfo(@PathVariable String member_id) throws Exception {
        return memberService.getMemberInfo(member_id);
    }

    @GetMapping("getMembers")
    public ResponseEntity<?> getAllMembers() throws Exception {
        return memberService.getMembers();
    }

    @PostMapping("login")
    public ResponseEntity<?> login(@RequestBody LoginPOJO loginPOJO) throws Exception {
        return memberService.login(loginPOJO);
    }
    @PostMapping( "register")
    public ResponseEntity<?> register(@RequestBody UserProfile userProfile) throws Exception {
        return memberService.registerNewUser(userProfile);
    }

    @PostMapping("logon")
    public ResponseEntity<?> logon(@RequestBody LogonPojo logonPOJO) throws Exception {
        return memberService.logon(logonPOJO);
    }

    @GetMapping("getMembersAnalytics")
    public ResponseEntity<?> getMembersAnalytics() throws Exception {
        return memberService.getMembersAnalytics();
    }
}
