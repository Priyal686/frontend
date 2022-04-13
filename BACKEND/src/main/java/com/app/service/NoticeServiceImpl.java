package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.NoticeRepository;
import com.app.pojos.Notice;
@Service
public class NoticeServiceImpl implements INoticeService {
	@Autowired
	NoticeRepository noticeRepo;

	@Override
	public List<Notice> getNotice() {

		System.out.println("in method of " + getClass());
		return noticeRepo.findAll();
	}
	
	@Override
	public Notice getNoticeById(int id) {
		System.out.println("in method of " + getClass());
		return noticeRepo.findById(id);
	}

	@Override
	public Notice addNotice(Notice notice) {
		System.out.println("in method of " + getClass());
		return noticeRepo.save(notice);
	}

	@Override
	public void deleteNotice(int id) {
		System.out.println("in method of " + getClass());
		noticeRepo.deleteById(id);
	}

	@Override
	public Notice updateNotice(Notice notice, int id) {
		System.out.println("in method of " + getClass());
		return noticeRepo.save(notice);
	}

}
