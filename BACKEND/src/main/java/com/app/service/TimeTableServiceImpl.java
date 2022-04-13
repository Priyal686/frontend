package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.TimeTableRepository;
import com.app.pojos.TimeTable;


@Service
@Transactional
public class TimeTableServiceImpl implements ITimeTableService{
	
	@Autowired
	private TimeTableRepository timeTableRepo;
	
	@Override
	public List<TimeTable> getAllTimeTable(){
		return timeTableRepo.findAll();
	}
	
	@Override
	public TimeTable addOrUpdateTimeTableDetails(TimeTable tt) {
		return timeTableRepo.save(tt);
	}
	
	@Override
	public String deleteTimeTableDetails(int id) {
		timeTableRepo.deleteById(id);
		return "Time Table Details with ID "+id+" deleted successfully...";
	}
	
	@Override
	public TimeTable fetchTimeTableDetails(int ttId) {
		// invoke dao's method
		// Optional<Employee> optional = employeeRepo.findById(empId);
		return timeTableRepo.findById(ttId).
				orElseThrow();
	}

	
	

}
