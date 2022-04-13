package com.app.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.app.dto.AttendanceRequest;
import com.app.pojos.Student;
import com.app.pojos.ToDo;
import com.app.service.IStudentService;
import com.app.service.IToDoService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/student")
public class ToDoController {
	@Autowired
	private IToDoService service;
	 @Autowired
	private IStudentService sservice;

//1. get all todos for a user
//	GET /users/{userName}/todos
	@GetMapping("/{userName}/todos")
	public List<ToDo> fetchAllToDos(@PathVariable String userName) {
		System.out.println("in fetch all todos " + userName);
		return service.getTodos(userName);
	}

	@GetMapping("/{userName}/todos/{id}")
	public ToDo fetchToDo(@PathVariable String userName, @PathVariable long id) {
		System.out.println("in fetch todo by id " + userName);
		return service.findById(id);
	}

	// PUT /users/{userName}/todos/{todo_id}
	@PutMapping("/{userName}/todos/{id}")
	public ResponseEntity<?> updateToDo(@PathVariable String userName, @PathVariable long id, @RequestBody ToDo todo) {
		System.out.println("in update todo  " + todo);
		return new ResponseEntity<>(service.saveOrUpdate(userName,todo), HttpStatus.OK);
	}

	// POST /users/{userName}/todos
	@PostMapping("/{email}/profile")
	public ResponseEntity<?> saveToDo(@PathVariable String email, @RequestBody Student student) {
		System.out.println("in save student  " + student);
		Student createdStudent = sservice.saveOrUpdate(email,student);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdStudent.getId())
				.toUri();
		return ResponseEntity.created(uri).build();
	}
	@GetMapping("/hello")
	public String testHello() {
		return "hello user";
	}

	@DeleteMapping("/{userName}/todos/{todoId}")
	public ResponseEntity<?> deleteToDo(@PathVariable String userName, @PathVariable long todoId) {
		System.out.println("in del todo " + todoId);
		try {
			service.deleteToDo(todoId);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

	}

//	//method to get all students by course
//	@GetMapping("/{course}/students")
//	public List<AttendanceRequest> fetchAllStudents(@PathVariable String course) {
//		System.out.println("in fetch all students " + course);
//		return sservice.getStudents(course);
//	}
	
	
	



}
