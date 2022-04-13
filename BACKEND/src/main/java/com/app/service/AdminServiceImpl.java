package com.app.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.AdminRepository;
import com.app.dao.UserRepository;
import com.app.pojos.Admin;
import com.app.pojos.User;
@Service
@Transactional
public class AdminServiceImpl implements IAdminService {
	@Autowired
	private UserRepository userRepo;
	@Autowired
	private AdminRepository adminRepo;

	@Override
	public Admin saveOrUpdate(String userName, Admin s) {
		User user = userRepo.findByUserEmail(userName).orElseThrow(() -> new RuntimeException("User Name Not Found"));
		s.setUser(user);

		return adminRepo.save(s);
	}

}
