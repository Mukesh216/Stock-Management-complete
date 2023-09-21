package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.userDto;
import com.example.demo.modal.StockModal;
import com.example.demo.modal.User;
import com.example.demo.repository.StockRepo;
import com.example.demo.repository.UserRepo;
import com.example.demo.repository.UserStockRepo;

@Service
public class UserService {
	
	@Autowired
	UserRepo ur;
	@Autowired
	UserStockRepo usr;
	@Autowired
	StockRepo sr;
	
	
	public List<User> getUser() {
		return ur.findAll();
	}
	
	public void addUser(User user) {
		ur.save(user);
	}
	
	public void addWallet(int count,String name) {
		User user = ur.findUserId(name);
		user.setWallet(user.getWallet()+count);
		ur.save(user);
		return;
		
	}
	
	public String authCheck(String email,String password) {
		User user = ur.findByEmail(email);
		if(user == null) {
			return "User not found";
		}
		
		if(user.getPassword().equals(password)) {
			return "ok";
		}
		return "Invalid Credential";
	}
	
	public userDto getSingleUser(String email) {
		User user = ur.findByEmail(email);
		
		userDto userDTO = new userDto();
		userDTO.setEmail(user.getEmail());
	    userDTO.setRole(user.getRole());
	    userDTO.setWallet(user.getWallet());
	    userDTO.setUsername(user.getUsername());

	    return userDTO;
	}
	
	public List<StockModal> stockOwnedByUser(String email){
		User user = ur.findByEmail(email);
		List<Integer> ids = usr.findStockIdsByUserId(user.getId());
		List<StockModal> sm = new ArrayList<>();
		for (Integer stockid : ids) {
		    Optional<StockModal> s = sr.findById(stockid);
		    if (s.isPresent()) {
		        StockModal sd = s.get();
		        sm.add(sd);
		    }
		}
		return sm;
	}
	
	public int balance(String user_name) {
		User user =  ur.findUserId(user_name);
		return user.getWallet();
	}
	
	

	
	
}
