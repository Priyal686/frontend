package com.app.dao;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Marks;

public interface IMarksDao extends JpaRepository<Marks, Integer>{
	
	@Query("select u from Marks u where u.rollNo.id =:id")
	Optional<Marks> findById(@Param("id") int id);
	
	@Query("select obt_marks,rollNo from Marks")
	List<Marks> findAllMarks();
	
	
	//delete by roll no
	@Modifying
	@Query(value="delete from marks where roll_no=:stdroll",nativeQuery = true)
	int deleteByRollNo(@Param("stdroll") int stdroll);
	
	
	//cls,subject,date,obt_marks,total,remark,examId,rollNo
	@Modifying
	@Query(value="insert into marks(class_name,subject,date,obt_marks,total_marks,remark,exam_id,roll_no) values"
			+ "(:cls,:subject,:date,:obt_marks,:total,:remark,:examId,:rollNo)",nativeQuery = true)
	
	int saveMarks(@Param("cls") String cls,@Param("subject") String subject,@Param("date") String date,
			@Param("obt_marks") int obt_marks,@Param("total") int total,
			@Param("remark") String remark,@Param("examId") String examId,@Param("rollNo") int rollNo);
	
	@Query(value="select * from marks where exam_id=:examId and roll_no=:rollNo and class_name=:cls",nativeQuery = true)
	Collection<Marks> getExamIdAndRollNoAndCls(@Param("examId") int examId,@Param("rollNo") int rollNo,@Param("cls") String cls);
	
	@Query(value="select * from marks where exam_id=:examId and class_name=:cls and subject=:sub",nativeQuery = true)
	Collection<Marks> getExamIdAndClsAndSub(@Param("examId") int examId,@Param("cls") String cls,@Param("sub") String sub);
	
}
