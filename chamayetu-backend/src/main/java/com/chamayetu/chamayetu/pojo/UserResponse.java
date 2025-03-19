package com.chamayetu.chamayetu.pojo;

import java.io.Serializable;

public class UserResponse implements Serializable {
    private static final long serialVersionUID = 1L;
    private String member_no ;
    private String first_name ;
    private String last_name ;
    private String email ;
    private boolean ind_admin ;
    private boolean is_active ;
    private String phone_number ;



    public String getMember_no() {
        return member_no;
    }

    public void setMember_no(String member_no) {
        this.member_no = member_no;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public boolean isInd_admin() {
        return ind_admin;
    }

    public void setInd_admin(boolean ind_admin) {
        this.ind_admin = ind_admin;
    }

    public boolean isIs_active() {
        return is_active;
    }

    public void setIs_active(boolean is_active) {
        this.is_active = is_active;
    }

    public String getPhone_number() {
        return phone_number;
    }

    public void setPhone_number(String phone_number) {
        this.phone_number = phone_number;
    }
}
