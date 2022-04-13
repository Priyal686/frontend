package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "student")
public class Student extends BaseEntity {
	@Column(length = 30)
	private String Fname;
	@Column(length = 30)
    private String Mname;
	@Column(length = 30)
    private String Lname;
	@Column(length = 30)
    private int Mobile;
	@Column(length = 30)
    private int Pincode;
	@Column(length = 30)
    private String State;
	@Column(length = 30)
    private String Gender;
	@Column(length = 30)
    private String Address;
	@Column(length = 30)
    private String Batch;
	@Column(length = 30)
    private String City;
	@Column(length = 30)
    private String Country;
	@Column(length = 30)
    private String Course;
	@Column(length = 30)
    private String DOB;
	@Column(length = 50)
    private String Email;
	@Column(length = 30)
    private String District;
	//uni dir many to one association between User 1<----- * Student
		@ManyToOne(fetch = FetchType.LAZY)
		@JsonIgnore
		//@OneToOne
		@JoinColumn(name = "user_id",nullable = false)
	
	
	    private User user;
	  
	
		
		@JsonIgnore
		@OneToMany(mappedBy = "rollNo",cascade = CascadeType.ALL,orphanRemoval = true)
		private List<Attendance> attendance=new ArrayList<Attendance>();
		
		@JsonIgnore
		@OneToMany(mappedBy="rollNo",cascade=CascadeType.ALL,orphanRemoval=true)
		private List<Marks> marks=new ArrayList<>();
		
    
}
