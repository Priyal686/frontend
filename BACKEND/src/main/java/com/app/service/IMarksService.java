package com.app.service;

import java.util.Collection;

import com.app.dto.AddMarks;
import com.app.dto.GetMarks;
import com.app.dto.StudentMarks;
import com.app.pojos.Exam;
import com.app.pojos.Marks;

public interface IMarksService {
	
	//add or update marks
	int addOrUpdateMarksDetails(AddMarks s);

	Collection<Marks> getStudentMarks(GetMarks m);
	
	Collection<Marks> getClassMarks(StudentMarks m);

	String deleteMarks(int stdroll);

	Marks fetchMarksDetails(int rollNo);
	
	Exam addExamDeatails(Exam e);
	
	Collection<Exam> getAllExam();
}
