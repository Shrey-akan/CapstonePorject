package com.demo.contactentity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Contact {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long cid;
	private String cstuname;
	private String cstuemail;
	private String csubject;
	private long cstunumber;
	private String message;
	
	public Contact() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Contact(long cid, String cstuname, String cstuemail, String csubject, long cstunumber, String message) {
		super();
		this.cid = cid;
		this.cstuname = cstuname;
		this.cstuemail = cstuemail;
		this.csubject = csubject;
		this.cstunumber = cstunumber;
		this.message = message;
	}
	public long getCid() {
		return cid;
	}
	public void setCid(long cid) {
		this.cid = cid;
	}
	public String getCstuname() {
		return cstuname;
	}
	public void setCstuname(String cstuname) {
		this.cstuname = cstuname;
	}
	public String getCstuemail() {
		return cstuemail;
	}
	public void setCstuemail(String cstuemail) {
		this.cstuemail = cstuemail;
	}
	public String getCsubject() {
		return csubject;
	}
	public void setCsubject(String csubject) {
		this.csubject = csubject;
	}
	public long getCstunumber() {
		return cstunumber;
	}
	public void setCstunumber(long cstunumber) {
		this.cstunumber = cstunumber;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	
	
	
}
