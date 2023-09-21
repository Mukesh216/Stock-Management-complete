package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.modal.StockModal;
import com.example.demo.modal.UserStock;
import com.example.demo.service.StockService;
import com.example.demo.service.UserStockService;



@RestController
@RequestMapping("/stocks")
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
public class StockController {
	
	@Autowired
	StockService ss;
	
	@Autowired
	UserStockService uss;
	
	@GetMapping
	public List<StockModal> showStocks(){
		return ss.showStocks();
	}
	
	@GetMapping("/purchasedToday")
	public int getStocksPurchasedToday() {
		return uss.stockpurchasedToday();
	}
	
	@GetMapping("/topStocks")
	public List<StockModal> getTopStocks(){
		return ss.topStocks();
	}
	
	@GetMapping("/compare")
	public int comparePrice(@RequestParam String name,@RequestParam int price) {
		return ss.comparePrice(name, price);
	}
	
	@PostMapping
	public String addStocks(@RequestBody StockModal sm) {
		ss.addStocks(sm);
		return "All datas are added to database successfully";
	}
	
	@DeleteMapping("/delete")
	public String deleteStocks(@RequestParam int id) {
		ss.deleteStocks(id);
		return id+" is deleted" ;
	}
	
	@PutMapping("/update/stockCount")
	public String updateStocks(@RequestParam String name,@RequestParam int count) {
		return ss.updateStocksCount(name, count) ;
	}
	
	@PutMapping("/update/name")
	public String updateStock(@RequestParam String prevname, @RequestParam String newname) {
		ss.updateStockName(prevname,newname);
		return "Name is updated Successfully";
	}
	
	@GetMapping("/transactionHistory")
	public List<UserStock> get(){
		return uss.getTransaction();
	}
	
	@GetMapping("/usersPerStock")
	public int UsersPerStock(@RequestParam String stock_name) {
		return ss.UsersPerStock(stock_name);
	}
	
	@GetMapping("/totalStocks")
	public int totalStocks() {
		return ss.totalStocksAvailable();
	}
	
	@GetMapping("/find")
	public StockModal find(@RequestParam int id) {
		return ss.findId(id);
	}
	@PutMapping("/update")
	public String updateSt(@RequestBody StockModal sm ,@RequestParam int id) {
		ss.updateStocksBody(sm , id);
		return "1";
	}

	
	
//	@GetMapping("/read/sort")
//	public List<StockModal> readById(@RequestParam(value = "field") String field) {
//		return ss.getSortedData(field);
//	}
//	
//	@GetMapping("/read/page")
//	public List<StockModal> readThePage(@RequestParam(value = "pgNum")int pgNum, @RequestParam(value = "pgSize")int pgSize) {
//		return ss.getPage(pgNum, pgSize);
//	}
//	
//	@GetMapping("read/page/sort")
//	public List<StockModal> readThePageSorted(@RequestParam(value = "pgNum")int pgNum, @RequestParam(value = "pgSize")int pgSize, @RequestParam(value = "field")String field) {
//		return ss.getSortedDataInPage(pgNum, pgSize, field);
//	}
	
}
