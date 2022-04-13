package com.app.service;

import com.app.pojos.Admin;
import com.app.pojos.Student;

public interface IAdminService {
	Admin saveOrUpdate(String userName, Admin s);

}
