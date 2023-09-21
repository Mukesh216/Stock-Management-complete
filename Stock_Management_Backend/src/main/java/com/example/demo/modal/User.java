package com.example.demo.modal;



import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String email;
    private String password;
    private String role;
    @Column(name = "wallet", columnDefinition = "int default 0")
    private int wallet;
    private String username;

	
	User(){
		super();
	}
	User(String email,String password,String role ,String username){
		this.email = email;
		this.password = password;
		this.role = role;
		this.username = username;
		
	}
	
	//getters
	public int getId(){
		return id;
	}
	
	public String getEmail() {
		return email;
	}
	public String getPassword() {
		return password;
	}
	public String getRole() {
		return role;
	}
	public int getWallet() {
		return wallet;
	}
	public String getUsername() {
		return username;
	}
	
	//setters
	public void setEmail(String email) {
		this.email = email;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public void setWallet(int wallet) {
		this.wallet = wallet;
	}
	public void setUsername(String username) {
		this.username = username;
	}
}
