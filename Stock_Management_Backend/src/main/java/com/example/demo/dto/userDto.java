package com.example.demo.dto;

public class userDto {

    private String email;
    private String role;
    private int wallet;
    private String username;

    // Constructors
    public userDto() {
        // Default constructor
    	super();
    }

    // Parameterized constructor
    public userDto(String email, String role, int wallet, String username) {
        this.email = email;
        this.role = role;
        this.wallet = wallet;
        this.username = username;
    }

    // Getters
    public String getEmail() {
        return email;
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

    // Setters
    public void setEmail(String email) {
        this.email = email;
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
