package com.app.service;

import java.util.List;

import com.app.pojos.TimeTable;

public interface ITimeTableService {
	
	List<TimeTable> getAllTimeTable();
	TimeTable addOrUpdateTimeTableDetails(TimeTable transientTT);
	String deleteTimeTableDetails(int id);
	public TimeTable fetchTimeTableDetails(int ttId);

}
