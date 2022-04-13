package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Exam;

public interface IExamDao extends JpaRepository<Exam, Integer> {

}
