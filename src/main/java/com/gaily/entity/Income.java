package com.gaily.entity;

/**
 * @author guyouhai888
 * @date 2020/4/14
 */

public class Income {

    private int id;
    private String date;
    private double salary;
    private String incomeSource;
    private double totalPrice;

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

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }

    public String getIncomeSource() {
        return incomeSource;
    }

    public void setIncomeSource(String incomeSource) {
        this.incomeSource = incomeSource;
    }

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }

    @Override
    public String toString() {
        return "Income{" +
                "id=" + id +
                ", date='" + date + '\'' +
                ", salary=" + salary +
                ", incomeSource='" + incomeSource + '\'' +
                ", totalPrice=" + totalPrice +
                '}';
    }
}
