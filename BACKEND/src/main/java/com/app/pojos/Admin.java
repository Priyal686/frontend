package com.app.pojos;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "admin")
public class Admin extends BaseEntity {
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
	private String City;
	@Column(length = 30)
	private String Country;

	@Column(length = 30)
	private String DOB;
	@Column(length = 30)
	private String District;
	// uni dir many to one association between User 1<----- * Student
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id", nullable = false)
	private User user;

}
