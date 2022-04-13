package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="marks")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Marks extends BaseEntity{
	
	@Column(length=30)
	private String className;
	@Column(length=30)
	private String subject;
	@Column
	private LocalDate date;
	@NotNull(message = "Obtained marks can't be blank")
	private int obt_marks;
	@Column(length=30)
	private double totalMarks;
	@Column(length=30)
	private String remark;
	
	
	
	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "exam_id", nullable = false)
	private Exam examId;
	
	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "roll_no", nullable = false)
	private Student rollNo;


}
