package com.example.demo.modal;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;


@Entity
public class UserStock {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    
    
    private Date purchase_date;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "stock_id")
    private StockModal stock;
    
    private int stock_price;
    
    private int count;

    public UserStock() {
        super();
    }

    public UserStock(Date purchase_date,User user,StockModal stock,int stock_price,int count ) {
        super();
        this.user = user;
        this.stock = stock;
        this.purchase_date = purchase_date;
        this.stock_price = stock_price;
        this.count = count;
        
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
    
    public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}

	public int getStock_price() {
		return stock_price;
	}
    
    public void setStock_price(int stock_price) {
		this.stock_price = stock_price;
	}

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public StockModal getStock() {
        return stock;
    }

    public void setStock(StockModal stock) {
        this.stock = stock;
    }
    
    public java.util.Date getPurcharse_date() {
		return purchase_date;
	}
    
    public void setPurcharse_date(java.util.Date purcharse_date) {
		this.purchase_date = purcharse_date;
	}
}