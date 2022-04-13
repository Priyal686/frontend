package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Notice;
import com.app.service.INoticeService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/homepage")
public class HomepageController {
	@Autowired
	INoticeService noticeService;
	
	
	@GetMapping("/getNotice")
	public List<Notice> getNotice() {
		System.out.println("in method of "+getClass());
		return noticeService.getNotice();
	}

	//write a method to get notice by id
	@GetMapping("/getNoticeById/{id}")
	public Notice getNoticeById(@PathVariable int id) {
		System.out.println("in method of " + getClass());
		return noticeService.getNoticeById(id);
	}
	//write a method to save notice
	@PostMapping("/addNotice")
	public Notice addNotice(@RequestBody Notice notice) {
		System.out.println("notice "+notice);
		System.out.println("in method of " + getClass());
		return noticeService.addNotice(notice);
	}

	//write a method to delete notice
	@DeleteMapping("/deleteNotice/{id}")
	public void deleteNotice(@PathVariable int id) {
		System.out.println("in method of " + getClass());
		noticeService.deleteNotice(id);
	}

	//write a method to update notice
	@PutMapping("/updateNotice/{id}")
	public Notice updateNotice(@RequestBody Notice notice,@PathVariable int id) {
		System.out.println("in put map"+notice);
		System.out.println("in method of " + getClass());
		return noticeService.updateNotice(notice, id);
	}





	
	
	

}
