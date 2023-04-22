package com.demo.cartrepo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.cartentity.Cart;

@Repository
public interface CartRepo extends JpaRepository<Cart, Integer>{

}
