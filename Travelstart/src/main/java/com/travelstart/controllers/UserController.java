package com.travelstart.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.travelstart.entities.user.User;
import com.travelstart.repository.UserRepository;

@RestController
@RequestMapping("/api")
public class UserController {

	@Autowired
	private UserRepository userRep;
	
	@GetMapping("/users")
	public List<User> getUsers(){
		return userRep.findAll();
	}
	
	@GetMapping("/user/{id}")
	public Optional<User> getUser(@PathVariable Long id) {
		return userRep.findById(id);
	}
	
	@DeleteMapping("/user/{id}")
	public boolean deleteUser(@PathVariable Long id) {
		userRep.deleteById(id);
		return true;
	}
	
	@PostMapping("/user")
	public User createUser(@RequestBody User regUSer) {
		regUSer.setType("customer");
		return userRep.save(regUSer);
	}
	
	@PutMapping("/user/{id}")
	public User updateUser(@RequestBody User upUser,@PathVariable Long id) {
		return userRep.save(upUser);
		
	}
	
	
}
