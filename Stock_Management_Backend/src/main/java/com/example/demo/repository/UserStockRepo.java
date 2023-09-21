package com.example.demo.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.example.demo.modal.UserStock;

@Repository
public interface UserStockRepo extends JpaRepository<UserStock, Integer> {
	
	@Query(value = "SELECT user_id FROM user_stock GROUP BY user_id ORDER BY COUNT(stock_id) DESC LIMIT 5" , nativeQuery = true)
	public List<Integer> topBuyers();

	@Query(value = "SELECT SUM(count) FROM user_stock WHERE DATE(purchase_date) = CURRENT_DATE", nativeQuery = true)
	public int countStocksPurchasedToday();


	@Query(value = "SELECT stock_id FROM user_stock  WHERE user_id = :id" ,nativeQuery = true)
	public List<Integer> findStockIdsByUserId(@Param("id") int i);
			
	@Query(value = "SELECT stock_id FROM user_stock GROUP BY stock_id ORDER BY COUNT(user_id) DESC LIMIT 5" , nativeQuery = true)
	public List<Integer> topStocks();
	
	@Query(value = "SELECT SUM(count) as total_stock_count FROM user_stock WHERE stock_id = :stock_id AND user_id = :user_id" ,nativeQuery = true)
	public int countOfStocksByUser(@Param(value="stock_id") int stock_id ,@Param(value="user_id") int user_id);

	@Query(value = "SELECT SUM(stock_price * count)  FROM user_stock WHERE stock_id = :stock_id AND user_id = :user_id",nativeQuery = true)
	public int PriceOfStocksByUser(@Param(value="stock_id") int stock_id ,@Param(value="user_id") int user_id);

	@Query(value = "SELECT SUM(stock_price * count)  FROM user_stock WHERE  user_id = :user_id",nativeQuery = true)
	public int PriceTotalStocks(@Param(value = "user_id") int user_id);
	
	@Query(value=" SELECT  stock_id, SUM(count) as total_count FROM user_stock WHERE user_id = :user_id GROUP BY user_id, stock_id ORDER BY total_count DESC LIMIT 1",nativeQuery = true)
	public int findTopBuyedStockPerUser(@Param(value = "user_id") int user_id);
	
	@Query(value = "SELECT stock_price*count FROM user_stock WHERE user_id = :user_id ORDER BY stock_price * count DESC LIMIT 1", nativeQuery = true)
	public int findHighestPurchase(@Param(value = "user_id") int user_id);
	
	@Query(value = "SELECT SUM(stock_price*count) , stock_id FROM user_stock WHERE user_id = :user_id GROUP BY stock_id" , nativeQuery = true)
	public List<Integer> stockPricesByUser(@Param(value = "user_id") int user_id);

	@Query(value = "SELECT stock_id from user_stock WHERE user_id = :user_id ORDER BY purchase_date DESC LIMIT 1",nativeQuery = true)
	public int getIdOfRecentPurchased(@Param(value = "user_id") int user_id);
	
	@Query(value = "SELECT COUNT(*) FROM user_stock where stock_id = :stock_id" , nativeQuery = true)
	public int UsersPerStock(@Param(value = "stock_id") int stock_id);
	
	@Query(value = "SELECT stock_price*count FROM user_stock where user_id = :user_id ORDER BY purchase_date DESC LIMIT 1", nativeQuery = true)
	public int lastPurchased(@Param(value = "user_id") int user_id);
}
