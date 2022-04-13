package com.app.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.TeacherRespository;
import com.app.dao.UserRepository;
import com.app.pojos.Teacher;
import com.app.pojos.User;
@Service
@Transactional
public class TeacherServiceImpl implements ITeacherService {
	@Autowired
	private UserRepository userRepo;
	@Autowired
	private TeacherRespository teacherRepo;

	@Override
	public Teacher saveOrUpdate(String userName, Teacher s) {
		User user = userRepo.findByUserEmail(userName).orElseThrow(() -> new RuntimeException("User Name Not Found"));
		s.setUser(user);
		

		return teacherRepo.save(s);
	}

}
