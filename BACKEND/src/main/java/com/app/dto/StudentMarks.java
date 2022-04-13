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
public class StudentMarks {
	
	private int examId;
	private String cls;
	private String sub;
}
