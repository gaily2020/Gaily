package com.gaily.service;

import com.gaily.dao.CostDao;
import com.gaily.entity.Cost;
import com.gaily.util.NoteResult;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

/**
 * @author guyouhai888
 * @date 2020/4/14
 */

@Service("costService") // 需要扫描的spring容器
public class CostServiceImpl implements CostService {
    @Resource
    private CostDao costDao;

    //查询消费记录
    public NoteResult<List<Map>> checkCost(Map<String,String> map) {
        List<Map> list = costDao.findByDate(map);
        NoteResult<List<Map>> result = new NoteResult<List<Map>>();
        result.setStatus(0);
        result.setMsg("查询消费记录成功!");
        result.setData(list);

        List<Map> mlist = result.getData();
        for(int i=0;i<mlist.size();i++) {
            System.out.println(mlist.get(i));
        }

        System.out.println(result.getMsg());
        return result;

    }

    //查询消费总金额
    public NoteResult<List<Map>> sumCost(Map<String, String> map) {
        List sum = costDao.sum(map);
        NoteResult<List<Map>> result = new NoteResult<List<Map>>();
        result.setStatus(0);
        result.setMsg("查询消费总金额成功!");
        result.setData(sum);
        System.out.println(result.getMsg()+":"+result.getData());
        return result;
    }

    //添加消费记录
    public NoteResult<Cost> addCost(String date, String costReason, double price) {
        Cost cost = new Cost();
        cost.setDate(date);
        cost.setCostReason(costReason);
        cost.setPrice(price);
        costDao.save(cost);
        NoteResult<Cost> result = new NoteResult<Cost>();
        result.setStatus(0);
        result.setMsg("添加消费记录成功!");
        result.setData(cost);
        System.out.println(result.getMsg());
        return result;
    }

    public NoteResult<List<Map>> checkExportCost(Map<String, String> map) {
        // TODO Auto-generated method stub
        return null;
    }
}
