package com.example.demo.modal;




import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Table(name="Stocks")
@Entity
public class StockModal {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int stock_id ;
    private String name;
    private int stock_price;
    @Column(name = "no_of_stocks" ,columnDefinition = "int default 0")
    private int no_of_stocks;
    
    

    public StockModal(){
        super();
    }

    public StockModal( String name, int stock_price, int no_of_stocks){
        
        this.name = name;
        this.stock_price = stock_price;
        this.no_of_stocks = no_of_stocks;
    }

    // Getters
    public int getId()
    {
    	return stock_id ;
    }
   

    public String getName() {
        return name;
    }

    public int getStock_price() {
        return stock_price;
    }

    public int getNo_of_stocks() {
        return no_of_stocks;
    }

    // Setters
    

    public void setName(String name) {
        this.name = name;
    }

    public void setStock_price(int stock_price) {
        this.stock_price = stock_price;
    }

    public void setNo_of_stocks(int no_of_stocks) {
        this.no_of_stocks = no_of_stocks;
    }
}
