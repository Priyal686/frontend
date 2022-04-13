package com.app.dto;

public class AuthenticationResponse {
	private final String jwt;
	private String userType;
	private String name;

	public AuthenticationResponse(String jwt,String userType,String name){
		super();
		this.jwt = jwt;
		this.userType=userType;
		this.name=name;
	}

	public String getJwt() {
		return jwt;
	}
	public String getUserType() {
		return userType;
	}
	public String name() {
		return name;
	}
	
	
}
