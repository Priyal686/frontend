package com.app.dto;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.app.pojos.Exam;
import com.app.pojos.Student;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class AddMarks {
	
	private String cls;
	private String subject;
	private String date;
	private int obt_marks;
	private int total;
	private String remark;
	private String examId;
	private int rollNo;
	
}
