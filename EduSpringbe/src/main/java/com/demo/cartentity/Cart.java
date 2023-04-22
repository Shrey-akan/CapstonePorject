package com.demo.cartentity;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Cart {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int cartid;
	private String cartname;
	private double cartprice;
	private double cartqan;
	private Date date;
	
	
	public Cart() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Cart(int cartid, String cartname, double cartprice, double cartqan, Date date) {
		super();
		this.cartid = cartid;
		this.cartname = cartname;
		this.cartprice = cartprice;
		this.cartqan = cartqan;
		this.date = date;
	}

	public int getCartid() {
		return cartid;
	}
	public void setCartid(int cartid) {
		this.cartid = cartid;
	}
	public String getCartname() {
		return cartname;
	}
	public void setCartname(String cartname) {
		this.cartname = cartname;
	}

	public double getCartprice() {
		return cartprice;
	}

	public void setCartprice(double cartprice) {
		this.cartprice = cartprice;
	}

	public double getCartqan() {
		return cartqan;
	}

	public void setCartqan(double cartqan) {
		this.cartqan = cartqan;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	
	
}
