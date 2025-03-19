package com.chamayetu.chamayetu.pojo;

public class TotalsPOJO implements Totals {
    private long total;

    @Override
    public long getTotal() {
        return total;
    }

    public void setTotal(long total) {
        this.total = total;
    }
}
