package com.gaily.dao;

import java.util.List;
import java.util.Map;
import com.gaily.entity.Income;
import org.apache.ibatis.annotations.Mapper;

/**
 * 在income_gaily表中进行操作:增,删,改,查
 *
 * @author youhaigu
 *
 */
@Mapper
public interface IncomeDao {

	void save(Income income);

	// 接口默认是public 修饰
	List<Map> findByDate(Map map);

	// 按日期查询收入总金额
	List sum(Map map);
}
