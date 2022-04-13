package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="time_table")
@Getter
@Setter
@Data
public class TimeTable extends BaseEntity{
	@Column(length=30)
	private String dayAndDate;
	
	@Column(length=30)
	private String description;
	
	@Column(length=30)
	private String faculty;
	
	@Column(length=30)
	private String module;
	
	@Column(length=30)
	private String timing;
	
	@Column(length=30)
	private String venue;

}
