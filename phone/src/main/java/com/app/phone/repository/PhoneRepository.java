package com.app.phone.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.phone.entity.Phone;

public interface PhoneRepository extends JpaRepository<Phone, Long> {

	@Query("select distinct p.brand from Phone p")
	List<String> getBrand();

	List<Phone> findAllByBrand(String brand);
}
