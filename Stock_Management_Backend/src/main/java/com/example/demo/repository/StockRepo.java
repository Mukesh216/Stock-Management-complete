package com.example.demo.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.modal.StockModal;

import jakarta.transaction.Transactional;


@Repository
public interface StockRepo extends JpaRepository<StockModal, Integer> {
	
	 
	@Query(value = "SELECT * FROM stocks WHERE name = :name", nativeQuery = true)
	StockModal findByName(@Param("name") String name);
	
	@Modifying
	@Transactional
	@Query(value = "DELETE FROM stocks WHERE stock_id = :id", nativeQuery = true)
	void deleteByName(@Param("id") int id );
	
	@Query(value="Select * from stocks where name = :name",nativeQuery = true)
	 public StockModal findStockId(@Param("name") String name);
	
	@Query(value = "SELECT SUM(no_of_stocks) from stocks ",nativeQuery = true)
	public int totalStocks();
	
}
