package com.gaily.controller;

import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import com.gaily.entity.Cost;
import com.gaily.service.CostService;
import com.gaily.util.NoteResult;

@Controller
@RequestMapping("/cost")
public class SumCostController {
	@Resource
	private CostService costService;
	@RequestMapping("/sum.do")
	@ResponseBody
	public NoteResult<List<Map>> execute(String start_date,String end_date){
		Map<String,String> map = new HashMap<String,String>();
		map.put("start_date", start_date);
		map.put("end_date",end_date );
		NoteResult<List<Map>> result = costService.sumCost(map);
		return result;
		
	}
}
