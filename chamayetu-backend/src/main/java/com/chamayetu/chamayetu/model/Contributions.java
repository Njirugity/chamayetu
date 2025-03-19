package com.chamayetu.chamayetu.model;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "contributions")
public class Contributions {
    private Integer created_at ;
    private LocalDateTime date_modified ;
    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer contribution_id ;
    private String member_id ;
    private Integer amount ;
    private Integer total_contributions ;

    public Integer getCreated_at() {
        return created_at;
    }

    public void setCreated_at(Integer created_at) {
        this.created_at = created_at;
    }

    public LocalDateTime getDate_modified() {
        return date_modified;
    }

    public void setDate_modified(LocalDateTime date_modified) {
        this.date_modified = date_modified;
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
