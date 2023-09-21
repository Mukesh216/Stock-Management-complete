package com.example.demo.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.modal.User;

@Repository
public interface UserRepo extends JpaRepository<User, Integer>{
	
	 @Query("SELECT u FROM User u WHERE u.email = :email")
	   public User findByEmail(@Param("email") String email);
	 
	 @Query(value = "Select * from user where username =:username",nativeQuery = true)
	 public User findUserId(@Param("username") String username);
	 
	 
	 
	 
}
