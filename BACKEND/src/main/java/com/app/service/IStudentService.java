package com.app.service;

import com.app.pojos.Student;
import com.app.dto.AttendanceRequest;
import java.util.List;

public interface IStudentService {
	Student saveOrUpdate(String userName, Student s);

	//student find by course
	//List<AttendanceRequest> getStudents(String course);
	
	List<Student> getAllStudentByCourse(String course);

}
