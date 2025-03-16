package com.chamayetu.chamayetu.models;

import jakarta.persistence.Column;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.time.LocalDateTime;

@Table(name = "members")
public class Members {
    @Id
    @Column(name = "member_id")
    private String member_id;
    @Column(name = "created_at")
    private LocalDateTime created_at;
    @Column(name = "modified_at")
    private LocalDateTime modified_at;
    @Column(name = "first_name")
    private String first_name;
    @Column(name = "last_name")
    private String last_name;
    @Column(name = "email")
    private String email;
    @Column(name = "password_hash")
    private String password;
    @Column(name = "phone_number")
    private String phone_number;
    @Column(name = "is_admin")
    private Boolean is_admin;
    @Column(name = "is_active")
    private Boolean is_active;
}
