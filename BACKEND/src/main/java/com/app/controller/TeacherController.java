package com.app.controller;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.app.pojos.Admin;
import com.app.pojos.Teacher;
import com.app.service.ITeacherService;

@RestController
@RequestMapping("/teacher")
@CrossOrigin(origins = "http://localhost:3000")
public class TeacherController {
	
	@Autowired
	private ITeacherService tservice;
	
	@GetMapping("/hello")
	public String testHello() {
		return "hello teacher";
	}
	
	// POST /users/{userName}/todos
			@PostMapping("/{email}/profile")
			public ResponseEntity<?> saveToDo(@PathVariable String email, @RequestBody Teacher student) {
				System.out.println("in save student  " + student);
				Teacher createdStudent = tservice.saveOrUpdate(email,student);
				URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdStudent.getId())
						.toUri();
				return ResponseEntity.created(uri).build();
			}

}
