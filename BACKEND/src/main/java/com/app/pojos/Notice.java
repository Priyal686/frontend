package com.app.pojos;

import java.util.Date;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "notice")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Notice extends BaseEntity {
	@Column(length = 50)
	private String title;
	@Column(length = 50)
	private String description;
	//@Column(length = 50)
	private String date;
	@Column(length = 30)
	private String user;

}
