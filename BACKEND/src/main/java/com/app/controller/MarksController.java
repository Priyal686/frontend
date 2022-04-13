package com.app.controller;

import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AddMarks;
import com.app.dto.GetMarks;
import com.app.dto.StudentMarks;
import com.app.pojos.Exam;
import com.app.pojos.Student;
import com.app.service.IMarksService;
import com.app.service.IStudentService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/marks")
public class MarksController {
	@Autowired
	private IMarksService marksService;
	@Autowired
	private IStudentService sservice;
	public MarksController() {
		System.out.println("in marks constructor " + getClass());
	}

	// add marks
	//cls,subject,date,obt_marks,total,remark,examId,rollNo
	@PostMapping("/addmarks")
	public ResponseEntity<?> ModifyMarks(@RequestBody AddMarks m) {
		System.out.println("add marks"+m);
		return new ResponseEntity<>(marksService.addOrUpdateMarksDetails(m), HttpStatus.OK);
	}

//	// update
//	@PutMapping
//	public ResponseEntity<?> UpdateStudent(@RequestBody @Valid Notice n) {
//		System.out.println("update notice");
//		return new ResponseEntity<>(noticeService.addOrUpdateNoticeDetails(n), HttpStatus.OK);
//	}

	// get particular
	//examId,rollNo,cls
	@GetMapping("/getparticular/{cls}/{examid}/{rollno}")
	public ResponseEntity<?> getOneStudentMarks(@PathVariable String cls,@PathVariable int examid,@PathVariable int rollno) {
		GetMarks gm=new GetMarks();
		gm.setCls(cls);
		gm.setExamId(examid);
		gm.setRollNo(rollno);
		System.out.println("in get all marks"+gm);
		return new ResponseEntity<>(marksService.getStudentMarks(gm), HttpStatus.OK);
	}
	
	//examId,rollNo,subject
	@GetMapping("/getall/{cls}/{examid}/{sub}")
	public ResponseEntity<?> getAllStudentMarks(@PathVariable String cls,@PathVariable int examid,@PathVariable String sub) {
		StudentMarks sm=new StudentMarks();
		sm.setCls(cls);
		sm.setExamId(examid);
		sm.setSub(sub);
		
		System.out.println("in get all marks"+sm);
		return new ResponseEntity<>(marksService.getClassMarks(sm), HttpStatus.OK);
	}

	// delete by rollNo
	@DeleteMapping("/{stdroll}")
	public ResponseEntity<?> deleteStudentMarks(@PathVariable int stdroll) {
		System.out.println("in marks delete pocess");
		return new ResponseEntity<>(marksService.deleteMarks(stdroll), HttpStatus.OK);
	}
	
	@PostMapping("/addExam")
	public ResponseEntity<?> addExam(@RequestBody Exam e){
		System.out.println("in add exam");
		return new ResponseEntity<>(marksService.addExamDeatails(e),HttpStatus.OK);
	}
	@GetMapping("/getAllExam")
	public Collection<Exam> getAllexam(){
		return marksService.getAllExam();
	}
	
	@GetMapping("/getAllStudentByCourse/{course}")
	public List<Student> getAllStudentByCourse(@PathVariable String course){
		System.out.println("in getAllStudentByCourse "+course);
		return sservice.getAllStudentByCourse(course);
	}
}
