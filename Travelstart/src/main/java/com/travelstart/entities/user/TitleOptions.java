package com.travelstart.entities.user;

public enum TitleOptions {

	Mr ("Mr"),
	Mrs("Mrs"),
	Miss("Miss");
	
	private final String name;
	
	private TitleOptions(String name) {
		this.name=name;
	}
	
}
