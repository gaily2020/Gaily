package com.gaily.service;

import java.util.List;
import java.util.Map;

import com.gaily.entity.Cost;
import com.gaily.util.NoteResult;

public interface CostService {

    // 按照日期查询
    NoteResult<List<Map>> checkCost(Map<String, String> map);

    // 添加消费记录
    NoteResult<Cost> addCost(String date, String costReason, double price);

    // 查询消费记录
    NoteResult<List<Map>> sumCost(Map<String, String> map);

    NoteResult<List<Map>> checkExportCost(Map<String, String> map);

}
