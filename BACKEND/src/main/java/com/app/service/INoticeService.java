package com.app.service;

import java.util.List;

import com.app.pojos.Notice;


public interface INoticeService {
	List<Notice> getNotice();

	Notice getNoticeById(int id);
	
	Notice addNotice(Notice notice);

	void deleteNotice(int id);

	Notice updateNotice(Notice notice, int id);

}
