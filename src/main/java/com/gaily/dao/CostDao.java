package com.gaily.dao;

import com.gaily.entity.Cost;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.web.bind.annotation.Mapping;

import java.util.*;
/**
 * @author guyouhai888
 * @date 2020/4/14
 * 学习使用git
 */

@Mapper
public interface CostDao {


    //
    void save(Cost cost);

    // 接口默认是public 修饰
    // 按日期查询消费记录
    List<Map> findByDate(Map map);

    // 按日期查询消费总金额
    List sum(Map map);

}


