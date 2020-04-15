package com.gaily.entity;

/**
 * @author guyouhai888
 * @date 2020/4/14
 */

public class Cost {

    private int id;
    private String date;
    private String costReason;
    private double price;
    private double total;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getCostReason() {
        return costReason;
    }

    public void setCostReason(String costReason) {
        this.costReason = costReason;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public double getTotal() {
        return total;
    }

    public void setTotal(double total) {
        this.total = total;
    }

    @Override
    public String toString() {
        return "Cost{" +
                "id=" + id +
                ", date='" + date + '\'' +
                ", costReason='" + costReason + '\'' +
                ", price=" + price +
                ", total=" + total +
                '}';
    }
}
