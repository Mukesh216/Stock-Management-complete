package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
//import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.demo.modal.StockModal;
import com.example.demo.repository.StockRepo;
import com.example.demo.repository.UserStockRepo;

@Service
public class StockService {
	
	@Autowired
	StockRepo sr;
	
	@Autowired
	UserStockRepo usr;
	
	public List<StockModal> showStocks() {
		return sr.findAll();
	}
	
	public void addStocks(StockModal sm) {
		sr.save(sm);
	}
	
	public void deleteStocks(int id) {
		sr.deleteByName(id);
	}
	
	public String updateStocksCount(String name,int count) {
		StockModal sm = sr.findByName(name);
		int currentStockCount = sm.getNo_of_stocks();
		if (currentStockCount >= count) {
	        sm.setNo_of_stocks(currentStockCount - count);
	        sr.save(sm);
	        return "Stock Count is updated successfull";
	    } else {
	        return "Sorry stocks are unavailable";
	    }
	    
	}
	
	public void updateStockName(String prevname,String newname) {
		StockModal sm = sr.findByName(prevname);
		sm.setName(newname);
		sr.save(sm);
	}
	
	public List<StockModal> topStocks(){
		List<Integer> ids  = usr.topStocks();
		List<StockModal> sm = new ArrayList<>() ;
		for(Integer id:ids) {
			Optional<StockModal> s = sr.findById(id);
			if(s.isPresent()) {
				StockModal sp = s.get();
				sm.add(sp);
			}
		}
		return sm;
	}
	
	public int comparePrice(String name,int price) {
		StockModal sm = sr.findByName(name);
		return price-sm.getStock_price();
	}
	
	
	public List<StockModal> getSortedData(String field){
		return sr.findAll(Sort.by(Sort.DEFAULT_DIRECTION, field));
	}
	
	public List<StockModal> getPage(int pgNo,int pgSize) {
		Page<StockModal> p = sr.findAll(PageRequest.of(pgNo, pgSize));
		return p.getContent();
	}
	public List<StockModal> getSortedDataInPage(int pgNo,int pgSize,String field) {
		Sort s = Sort.by(Sort.DEFAULT_DIRECTION, field);
		Page<StockModal> p = sr.findAll(PageRequest.of(pgNo, pgSize, s));
		return p.getContent();
	}
	
	public int UsersPerStock(String stock_name) {
		StockModal sm = sr.findByName(stock_name);
		int count = usr.UsersPerStock(sm.getId());
		return count;
	}
	
	public int totalStocksAvailable() {
		return sr.totalStocks();
	}
	
	public StockModal findId(int id) {
		Optional<StockModal> sm = sr.findById(id);
		if(sm.isPresent()) {
			StockModal s = sm.get();
			return s;
		}
		return null;
	}
	public void updateStocksBody(StockModal smd , int id) {
		Optional<StockModal> sm = sr.findById(id);
		if(sm.isPresent()) {
			StockModal s = sm.get();
			s.setName(smd.getName());
			s.setNo_of_stocks(smd.getNo_of_stocks());
			s.setStock_price(smd.getStock_price());
			sr.save(s);
		}
			
	}
}
