package com.gaily.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.gaily.entity.Cost;
import com.gaily.service.CostService;
import com.gaily.util.NoteResult;

@Controller
@RequestMapping("/cost")
public class AddCostController {
	@Resource
	private CostService costService;
	@RequestMapping("/add.do")
	@ResponseBody
	public NoteResult<Cost> execute(String date,String costReason,String price){
		Double d_price = Double.parseDouble(price);
		NoteResult<Cost> result = costService.addCost(date, costReason, d_price);
		return result;
		
	}
}
