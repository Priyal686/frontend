package com.app.controller;

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

import com.app.pojos.TimeTable;
import com.app.service.ITimeTableService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/timetable")
public class TimeTableController {
	
	@Autowired
	private ITimeTableService timeTableService;
	
	public TimeTableController() {
		System.out.println("in ctor of "+getClass());
	}
	
	@GetMapping("/getall")
	public ResponseEntity<?> getAllTimeTableDetails(){
		System.out.println("in get all time table");
		return new ResponseEntity<>(timeTableService.getAllTimeTable(),HttpStatus.OK);
	}
	
	@PostMapping("/addTimeTable")
	public TimeTable addTimeTableDetails(@RequestBody TimeTable tt) // de-serial (un marshalling)
	{

		System.out.println("in add emp " + tt);
		return timeTableService.addOrUpdateTimeTableDetails(tt);
	}
	
	@DeleteMapping("/deletetimetable/{id}")
	public String deleteTimeTableDetails(@PathVariable int id) {
		System.out.println("in del emp dtls " + id);
		return timeTableService.deleteTimeTableDetails(id);
	}
	
	@GetMapping("/getbyid/{ttId}")
	public ResponseEntity<?> getTimeTableDetails(@PathVariable int ttId) {
		System.out.println("in get time table dtls " + ttId);
		try {
			// invoke service layer's method
			return new ResponseEntity<>(timeTableService.fetchTimeTableDetails(ttId), HttpStatus.OK);
		} catch (RuntimeException e) {
			System.out.println("err in get time table dtls " + e);
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}
		
	}
	
	@PutMapping("/updatedata")
	public TimeTable updateTimeTableDetails(@RequestBody TimeTable tt) // de-serial (un marshalling)
	{
		// e : DETACHED POJO , containing updated state
		System.out.println("in add emp " + tt);
		return timeTableService.addOrUpdateTimeTableDetails(tt);
	}
	

}
