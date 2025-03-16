package com.chamayetu.chamayetu.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("rest/members")
public class MembersController {
    @GetMapping("/memberInfo/{member_id}")
    public String memberInfo(@PathVariable String member_id){

        return member_id ;
    }
}
