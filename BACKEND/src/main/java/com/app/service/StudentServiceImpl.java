package com.app.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.app.dto.AttendanceRequest;
import com.app.dao.StudentRepository;
import com.app.dao.UserRepository;
import com.app.pojos.Student;
import com.app.pojos.User;
@Service
@Transactional
public class StudentServiceImpl implements IStudentService {
	@Autowired
	StudentRepository studentRepo;
	@Autowired
	private UserRepository userRepo;

	@Override
	public Student saveOrUpdate(String userName, Student s) {
		User user = userRepo.findByUserEmail(userName).orElseThrow(() -> new RuntimeException("User Name Not Found"));
		s.setUser(user);
	

		return studentRepo.save(s);
	}

	@Override
	public List<Student> getAllStudentByCourse(String course) {
		
		return studentRepo.findByCourse(course);
	}
	
//	@Override
//	public List<AttendanceRequest> getStudents(String course) {
//		//get students by course in optional 
//		//Optional<List> optional = studentRepo.findByCourse(course);
//		List<AttendanceRequest> optional = studentRepo.findByCourse(course);
//		//convert list of optional to list of attendance request
//		//List<AttendanceRequest> list = optional.orElseThrow(() -> new RuntimeException("No Students Found"));
//		//return list;
//		return optional;
//		
//		
//	}

}
