package com.chamayetu.chamayetu.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "contributions")
public class Contributions {
    private LocalDateTime created_at ;
    private LocalDateTime modified_at ;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer contribution_id ;
    private String member_id ;
    private Integer amount ;
    private Integer total_contributions ;

    public LocalDateTime getCreated_at() {
        return created_at;
    }

    public void setCreated_at(LocalDateTime created_at) {
        this.created_at = created_at;
    }

    public LocalDateTime getModified_at() {
        return modified_at;
    }

    public void setModified_at(LocalDateTime modified_at) {
        this.modified_at = modified_at;
    }

    public Integer getContribution_id() {
        return contribution_id;
    }

    public void setContribution_id(Integer contribution_id) {
        this.contribution_id = contribution_id;
    }

    public String getMember_id() {
        return member_id;
    }

    public void setMember_id(String member_id) {
        this.member_id = member_id;
    }

    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }

    public Integer getTotal_contributions() {
        return total_contributions;
    }

    public void setTotal_contributions(Integer total_contributions) {
        this.total_contributions = total_contributions;
    }
}
