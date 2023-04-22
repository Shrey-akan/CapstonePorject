package com.demo.studentity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Student {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long studid;
	private String studname;
	private String studemail;
	private long studnumber;
	private String studeducation;
	private double studpercentage;
	private String studcourcename;
	private String studusername;
	private String studpassword;
	
	public Student() {
		super();
	}
	
	public Student(long studid, String studname, String studemail, long studnumber, String studeducation,
			double studpercentage, String studcourcename, String studusername, String studpassword) {
		super();
		this.studid = studid;
		this.studname = studname;
		this.studemail = studemail;
		this.studnumber = studnumber;
		this.studeducation = studeducation;
		this.studpercentage = studpercentage;
		this.studcourcename = studcourcename;
		this.studusername = studusername;
		this.studpassword = studpassword;
	}
	public long getStudid() {
		return studid;
	}
	public void setStudid(long studid) {
		this.studid = studid;
	}
	public String getStudname() {
		return studname;
	}
	public void setStudname(String studname) {
		this.studname = studname;
	}
	public String getStudemail() {
		return studemail;
	}
	public void setStudemail(String studemail) {
		this.studemail = studemail;
	}
	public long getStudnumber() {
		return studnumber;
	}
	public void setStudnumber(long studnumber) {
		this.studnumber = studnumber;
	}
	public String getStudeducation() {
		return studeducation;
	}
	public void setStudeducation(String studeducation) {
		this.studeducation = studeducation;
	}
	public double getStudpercentage() {
		return studpercentage;
	}
	public void setStudpercentage(double studpercentage) {
		this.studpercentage = studpercentage;
	}
	public String getStudcourcename() {
		return studcourcename;
	}
	public void setStudcourcename(String studcourcename) {
		this.studcourcename = studcourcename;
	}
	public String getStudusername() {
		return studusername;
	}
	public void setStudusername(String studusername) {
		this.studusername = studusername;
	}
	public String getStudpassword() {
		return studpassword;
	}
	public void setStudpassword(String studpassword) {
		this.studpassword = studpassword;
	}
	
	
	
}
