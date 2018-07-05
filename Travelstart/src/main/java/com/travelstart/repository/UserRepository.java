package com.travelstart.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.travelstart.entities.user.User;

public interface UserRepository extends JpaRepository<User, Long> {

	
}
