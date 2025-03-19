package com.chamayetu.chamayetu.service;

import com.chamayetu.chamayetu.pojo.LoginPOJO;
import com.chamayetu.chamayetu.pojo.UserProfile;
import org.springframework.http.ResponseEntity;

public interface MemberService {
    ResponseEntity<?> getMemberInfo(String member_id) throws Exception ;
    ResponseEntity<?> getMembers() throws Exception ;
    ResponseEntity<?> login(LoginPOJO loginPOJO) throws Exception ;
    public boolean isCorrectPassword(String databasePassword, String userProvidedPassword) throws Exception;
    ResponseEntity<?> registerNewUser(UserProfile userProfile) throws Exception ;


}
