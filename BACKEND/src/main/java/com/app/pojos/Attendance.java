package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "attendance")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Attendance extends BaseEntity {
	
	private LocalDate date;
	private String course;
	private String remark;
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "roll_no",nullable = false)
	private Student rollNo;
	

}
