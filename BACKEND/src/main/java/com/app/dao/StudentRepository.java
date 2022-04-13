package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.dto.AttendanceRequest;
import com.app.pojos.Student;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface StudentRepository extends JpaRepository<Student, Integer> {
    //method to find user by course
  // @Query("select  u from student u where course =:course")
// List<AttendanceRequest> findByCourse( @Param("course") String course);
	//Optional<List> findByCourse( String course);
   
//   @Query("SELECT e FROM student e WHERE e.course LIKE %?1%")
//   public List<AttendanceRequest> findByCourse(String name);
	
	  @Query(value="select  * from student where course =:course",nativeQuery = true)
	 List<Student> findByCourse( @Param("course") String course);	

}
