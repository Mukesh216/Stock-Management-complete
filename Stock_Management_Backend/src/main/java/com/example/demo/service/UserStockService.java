package com.example.demo.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.modal.StockModal;
import com.example.demo.modal.User;
import com.example.demo.modal.UserStock;
import com.example.demo.repository.StockRepo;
import com.example.demo.repository.UserRepo;
import com.example.demo.repository.UserStockRepo;

@Service
public class UserStockService {
	
	@Autowired
	UserStockRepo usr;
	
	@Autowired
	StockRepo sr;
	
	@Autowired
	StockService ss;
	
	@Autowired
	UserRepo ur;
	
	public List<UserStock> getTransaction(){
		return usr.findAll();
	}
	
	public String userBuyStock(String username, String stock_name ,int count) {
		User user = ur.findUserId(username);
		StockModal stock = sr.findStockId(stock_name);
	    Date date = new Date();	
	    
	    int price = stock.getStock_price()*count;
	    
	    if (user.getWallet() >= price) {
	        if (stock.getNo_of_stocks() >= count) {
	            user.setWallet(user.getWallet() - price);
	            stock.setNo_of_stocks(stock.getNo_of_stocks() - count);
	            int stock_price = stock.getStock_price();
	            UserStock us = new UserStock(date, user, stock , stock_price,count);
	            usr.save(us);
	            return "Buy is successful";
	        } else {
	            return "Stock is unavailable";
	        }
	    } else {
	        return "Wallet is empty";
	    }
	}
	
	public List<String> topBuyers(){
		List<Integer> top_buyers = usr.topBuyers();
		List<String> top_users = new ArrayList<>();

		for (Integer userId : top_buyers) {
		    Optional<User> op_user = ur.findById(userId);
		    if(op_user.isPresent()) {
		    	User user = op_user.get();
		    	top_users.add(user.getUsername());
		    }
		    
		}
		return top_users;
	}
	
	public int CountOfStockByUser(String user_name , String stock_name) {
		User user = ur.findUserId(user_name);
		StockModal stock = sr.findStockId(stock_name);
		return usr.countOfStocksByUser(stock.getId(), user.getId());
		
		
	}
	
	public int UserInvestedInTotalStock(String user_name ) {
		User user = ur.findUserId(user_name);
		return usr.PriceTotalStocks(user.getId());
	
	}

	
	
	public int UserInvestedInPerStock(String user_name , String stock_name) {
		User user = ur.findUserId(user_name);
		StockModal stock = sr.findStockId(stock_name);
		return usr.PriceOfStocksByUser(stock.getId(), user.getId());	
	}
	
	public StockModal UserTopStockBought(String user_name) {
		User user = ur.findUserId(user_name);
		int id = usr.findTopBuyedStockPerUser(user.getId());
		Optional<StockModal> sm = sr.findById(id);
		if(sm.isPresent()) {
			StockModal s = sm.get();
			return s;
		}
		return null;
		
	}
	
	
	public int HighestPurchaseByUser(String user_name) {
		User user = ur.findUserId(user_name);
		int amount = usr.findHighestPurchase(user.getId());
		return amount;
	}
	
	public int stockpurchasedToday() {
		
		return usr.countStocksPurchasedToday();
	}
	
	public List<Integer> StocksPricesBoughtBYUser(String user_name) {
		User user = ur.findUserId(user_name);
		List<Integer> li = usr.stockPricesByUser(user.getId());
		return li;
	}
	
	public StockModal RecentPurchasedByUser(String user_name) {
		User user = ur.findUserId(user_name);
		int id = usr.getIdOfRecentPurchased(user.getId());
		Optional<StockModal> sm = sr.findById(id);
		if(sm.isPresent()) {
			StockModal s = sm.get();
			return s;
		}
		return null;
	}
	
	public int lastPurchasedStock(String user_name) {
		User user = ur.findUserId(user_name);
		int amount = usr.lastPurchased(user.getId());
		return amount;
	}


}
