package com.app.dao;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Notice;

public interface NoticeRepository extends JpaRepository<Notice, Integer> {
	List<Notice> findAll();

	Notice findById(int id);
	


}
