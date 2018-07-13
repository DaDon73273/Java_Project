package com.travelstart.entities.user;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class User {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="userId",nullable=false)
	Long userId;
	
	
	@Column(name="firstname",nullable=false)
	String firstname;
	
	@Column(name="lastname",nullable=false)
	String lastname;
	
	@Column(name="email",nullable=false,unique=true)
	String email;
	
	@Column(name="password",nullable=false)
	String password;
	
	@Column(name="type",nullable=false)
	String type;
	
	 @JsonIgnore
	@Column(name="title",nullable=false)
	TitleOptions title;
	
	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}
	
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}

	public TitleOptions getTitle() {
		return title;
	}

	public void setTitle(TitleOptions title) {
		this.title = title;
	}

	public User(Long userId,String firstname, String lastname, String email, String password, String type, TitleOptions title) {
		this.userId=userId;
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.password = password;
		this.type = type;
		this.title = title;
	}

	public User() {
	
	}
	
	
	
	
	
	
	
}
