package com.chamayetu.chamayetu.service.impl;

import com.chamayetu.chamayetu.model.Members;
import com.chamayetu.chamayetu.model.repository.Members_repository;
import com.chamayetu.chamayetu.pojo.*;
import com.chamayetu.chamayetu.service.MemberService;
import com.chamayetu.chamayetu.util.annotation.Facade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Facade
public class MemberServiceImpl implements MemberService {

    @Autowired
    private Members_repository membersRepository ;
    @Autowired
    private PasswordEncoder encoder;
    @Override
    public ResponseEntity<?> getMemberInfo(String member_id) throws Exception {
       List<Members> members  = membersRepository.fetchUserInfo(member_id);
        if(members.isEmpty()) {
            ErrorResponse errorResponse = new ErrorResponse();
            errorResponse.setErrorCode(404);
            errorResponse.setErrorMessage("User does not exist");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
        }
        UserResponse userResponse = new UserResponse() ;
        userResponse.setMember_id(members.get(0).getMember_id());
        userResponse.setFirst_name(members.get(0).getFirst_name());
        userResponse.setLast_name(members.get(0).getLast_name());
        userResponse.setEmail(members.get(0).getEmail());
        userResponse.setInd_admin(members.get(0).isIs_admin());
        userResponse.setIs_active(members.get(0).isIs_active());
        return ResponseEntity.status(HttpStatus.OK).body(userResponse);
    }

    @Override
    public ResponseEntity<?> getMembers() throws Exception {
        List<Members> members = (List<Members>) membersRepository.findAll();
        List<UserResponse> userResponses = new ArrayList<>();

        for (Members member : members) {
            UserResponse userResponse = new UserResponse();
            userResponse.setMember_id(member.getMember_id());
            userResponse.setFirst_name(member.getFirst_name());
            userResponse.setLast_name(member.getLast_name());
            userResponse.setEmail(member.getEmail());
            userResponse.setInd_admin(member.isIs_admin());
            userResponse.setIs_active(member.isIs_active());
            userResponse.setPhone_number(member.getPhone_number());
            userResponses.add(userResponse);
        }

        return ResponseEntity.status(HttpStatus.OK).body(userResponses);

    }

    @Override
    public ResponseEntity<?> login(LoginPOJO loginPOJO) throws Exception {
        List<Members> members  = membersRepository.fetchUserInfo(loginPOJO.getMember_id().toUpperCase());
        if(members.isEmpty()) {
            ErrorResponse errorResponse = new ErrorResponse();
            errorResponse.setErrorCode(404);
            errorResponse.setErrorMessage("User not found with member number " + loginPOJO.getMember_id().toUpperCase());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
        }

        final String dbPassword = members.get(0).getPassword_hash() ;
        final String userPassword = loginPOJO.getPassword() ;

        if (isCorrectPassword(dbPassword, userPassword)) {
            UserResponse userResponse = new UserResponse() ;
            userResponse.setMember_id(members.get(0).getMember_id());
            userResponse.setFirst_name(members.get(0).getFirst_name());
            userResponse.setLast_name(members.get(0).getLast_name());
            userResponse.setEmail(members.get(0).getEmail());
            userResponse.setInd_admin(members.get(0).isIs_admin());
            userResponse.setIs_active(members.get(0).isIs_active());
            return ResponseEntity.status(HttpStatus.OK).body(userResponse) ;
        }

        ErrorResponse errorResponse = new ErrorResponse();
        errorResponse.setErrorCode(401);
        errorResponse.setErrorMessage("The credentials used are incorrect please try again.");
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(errorResponse);
    }

    @Override
    public boolean isCorrectPassword(String databasePassword, String userProvidedPassword) throws Exception {
        return encoder.matches(userProvidedPassword, databasePassword);
    }

    @Override
    public ResponseEntity<?> registerNewUser(UserProfile userProfile) throws Exception {
        boolean passwordMatch = userProfile.getPassword().equals(userProfile.getConfirm_password()) ;
        if(!passwordMatch) {
            ErrorResponse errorResponse = new ErrorResponse();
            errorResponse.setErrorCode(422);
            errorResponse.setErrorMessage("Passwords mismatch");
            return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).body(errorResponse);
        }
        List<Members> members  = membersRepository.fetchUserInfo(userProfile.getMember_id().toUpperCase());
        if(!members.isEmpty()) {
            ErrorResponse errorResponse = new ErrorResponse();
            errorResponse.setErrorCode(422);
            errorResponse.setErrorMessage("User " + userProfile.getMember_id().toUpperCase() +  " already exists.");
            return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).body(errorResponse);
        }
        List<Members> members1  = membersRepository.findUserByEmail(userProfile.getEmail().toLowerCase());
        if(!members1.isEmpty()) {
            ErrorResponse errorResponse = new ErrorResponse();
            errorResponse.setErrorCode(422);
            errorResponse.setErrorMessage("User with email " + userProfile.getEmail().toLowerCase() +  " already exists.");
            return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).body(errorResponse);
        }
        Members member = new Members() ;
        member.setMember_id(userProfile.getMember_id());
        member.setModified_at(LocalDateTime.now());
        member.setEmail(userProfile.getEmail());
        member.setFirst_name(userProfile.getFirst_name());
        member.setLast_name(userProfile.getLast_name());
        member.setIs_active(userProfile.getIs_active());
        member.setIs_admin(userProfile.getIs_admin());
        member.setPhone_number(userProfile.getPhone_number());
        member.setPassword_hash(encoder.encode(userProfile.getPassword()));
        membersRepository.save(member) ;
        return  ResponseEntity.status(HttpStatus.OK).body(member) ;
    }

    @Override
    public ResponseEntity<?> logon(LogonPojo logonPOJO) throws Exception {
        List<Members> members  = membersRepository.findUserByEmail(logonPOJO.getEmail().toLowerCase());
        if(members.isEmpty()) {
            ErrorResponse errorResponse = new ErrorResponse();
            errorResponse.setErrorCode(404);
            errorResponse.setErrorMessage("User not found with email: " + logonPOJO.getEmail());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
        }

        final String dbPassword = members.get(0).getPassword_hash() ;
        final String userPassword = logonPOJO.getPassword() ;

        if (isCorrectPassword(dbPassword, userPassword)) {
            UserResponse userResponse = new UserResponse() ;
            userResponse.setMember_id(members.get(0).getMember_id());
            userResponse.setFirst_name(members.get(0).getFirst_name());
            userResponse.setLast_name(members.get(0).getLast_name());
            userResponse.setEmail(members.get(0).getEmail());
            userResponse.setInd_admin(members.get(0).isIs_admin());
            userResponse.setIs_active(members.get(0).isIs_active());
            return ResponseEntity.status(HttpStatus.OK).body(userResponse) ;
        }

        ErrorResponse errorResponse = new ErrorResponse();
        errorResponse.setErrorCode(401);
        errorResponse.setErrorMessage("The credentials used are incorrect please try again.");
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(errorResponse);
    }

}
