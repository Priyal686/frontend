package com.app.service;

import com.app.pojos.Teacher;

public interface ITeacherService {
	Teacher saveOrUpdate(String userName, Teacher s);

}
