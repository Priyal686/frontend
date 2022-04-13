package com.app.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.IExamDao;
import com.app.dao.IMarksDao;
import com.app.dto.AddMarks;
import com.app.dto.GetMarks;
import com.app.dto.ResourceNotFoundException;
import com.app.dto.StudentMarks;
import com.app.pojos.Exam;
import com.app.pojos.Marks;

@Service
@Transactional
public class MarksServiceImpl implements IMarksService {
	@Autowired
	private IMarksDao marksedao;
	@Autowired
	private IExamDao examdao;

	//Add marks
	@Override
	public int addOrUpdateMarksDetails(AddMarks n) {
		
		System.out.println("add marks"+n);


		
		return marksedao.saveMarks(n.getCls(),n.getSubject(),n.getDate(),n.getObt_marks(),
			 n.getTotal(),n.getRemark(),n.getExamId(),n.getRollNo());
	  
	}
                    
	@Override
	public Collection<Marks> getStudentMarks(GetMarks m) {
		return marksedao.getExamIdAndRollNoAndCls(m.getExamId(),m.getRollNo(),m.getCls());
	}
	
	//getAll
	@Override
	public Collection<Marks> getClassMarks(StudentMarks m) {
		return marksedao.getExamIdAndClsAndSub(m.getExamId(),m.getCls(),m.getSub());
	}
	
	//delete
	@Override
	public String deleteMarks(int stdroll) {
		marksedao.deleteByRollNo(stdroll);
		return "marks Details with ID " + stdroll + " deleted successfuly... ";
	}

	@Override
	public Marks fetchMarksDetails(int rollNo) {
		return marksedao.findById(rollNo)
				.orElseThrow(() -> new ResourceNotFoundException("maeks not assigned!!!!"));
	}

	@Override
	public Exam addExamDeatails(Exam e) {
		System.out.println("inexam service "+e);
		
		
		return examdao.save(e);
	}

	@Override
	public Collection<Exam> getAllExam() {

		return examdao.findAll();
	}
	
	
}
