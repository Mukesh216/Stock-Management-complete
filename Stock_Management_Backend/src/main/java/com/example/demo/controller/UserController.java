package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.userDto;
import com.example.demo.modal.StockModal;
import com.example.demo.modal.User;
import com.example.demo.service.UserService;
import com.example.demo.service.UserStockService;




@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
public class UserController {
	
	@Autowired
	UserService us;
	
	@Autowired
	UserStockService uss;
	
	@GetMapping
	public List<User> getUsers(){
		return us.getUser();
	}
	
	@GetMapping("/auth")
	public String authCheck(@RequestParam String email , @RequestParam String password) {
		return us.authCheck(email,password);
	}
	
	@GetMapping("/find")
	public userDto getUser(@RequestParam String email) {
		return us.getSingleUser(email);
	}
	
	@PutMapping("/addWallet")
	public String addWallet(@RequestParam String name ,@RequestParam int count) {
		us.addWallet(count, name);
		return "ok";
	}
	
	@GetMapping("/stocksOwned")
	public List<StockModal> getStockOwned(@RequestParam String email){
		return us.stockOwnedByUser(email);
	}
	
	@GetMapping("/topUsers")
	public List<String> getTopBuyers(){
		return uss.topBuyers();
	}
	
	@PutMapping("/buy")
	public String userBuy(@RequestParam String user_name , @RequestParam String stock_name , @RequestParam int count) {
		 return uss.userBuyStock(user_name, stock_name,count);
		 
	}
	
	@GetMapping("/countPerStock")
	public int CountPerInvestment(@RequestParam String user_name , @RequestParam String stock_name) {
		return uss.CountOfStockByUser(user_name, stock_name);
	}
	
	@GetMapping("/pricePerStock")
	public int priceInvestedInPerStock(@RequestParam String user_name , @RequestParam String stock_name) {
		return uss.UserInvestedInPerStock(user_name, stock_name);
	}
	
	@GetMapping("/priceTotalStock")
	public int priceInvestedInTotalStock(@RequestParam String user_name ) {
		return uss.UserInvestedInTotalStock(user_name);
	}
	
	@GetMapping("/topBuyStock")
	public StockModal topStockBought(@RequestParam String user_name ) {
		return uss.UserTopStockBought(user_name);
	}
	
	@GetMapping("/highestPurchase")
	public int highPurchase(@RequestParam String user_name) {
		return uss.HighestPurchaseByUser(user_name);
	}
	
	@GetMapping("/stockPricesEach")
	public List<Integer> StockPrices(@RequestParam String user_name){
		return uss.StocksPricesBoughtBYUser(user_name);
	}
	
	@GetMapping("/recentStock")
	public StockModal RecentStockPurchasedByUser(@RequestParam String user_name) {
		return uss.RecentPurchasedByUser(user_name);
	}
	
	@PostMapping
	public int addUser(@RequestBody User user) {
		try {
			us.addUser(user);
			return 1;
		}catch(Exception e) {
			e.printStackTrace();
			return 0;
		}
		
	}
	
	@GetMapping("/wallet")
	public int addWallet(@RequestParam String user_name) {
		return us.balance(user_name);
	}
	
	@GetMapping("/lastPurchased")
	public int lastPurchased(@RequestParam String user_name) {
		return uss.lastPurchasedStock(user_name);
	}
	

}
