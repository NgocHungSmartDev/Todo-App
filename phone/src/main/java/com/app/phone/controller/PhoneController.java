package com.app.phone.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.phone.entity.Phone;
import com.app.phone.model.BranchDto;
import com.app.phone.repository.PhoneRepository;

@RestController
@RequestMapping("/api/phone")
public class PhoneController {

	@Autowired
	private PhoneRepository phoneRepository;

	@GetMapping("/{id}")
	public Phone getAllPhones(@PathVariable Long id) {
		return phoneRepository.findById(id).get();
	}

	@GetMapping
	public List<Phone> getPhone(@RequestParam String brand) {
		List<Phone> list = phoneRepository.findAll();
		if (!brand.isBlank()) {
			return list.stream().filter(item -> item.getBrand().equals(brand)).collect(Collectors.toList());
		}
		return list;
	}

	@GetMapping("/brands")
	public List<BranchDto> getBrands() {
		List<BranchDto> branchDtos = new ArrayList<>();
		List<String> brands = phoneRepository.getBrand();
		if (!brands.isEmpty()) {
			brands.forEach(branchName -> {
				BranchDto dto = new BranchDto();
				dto.setCode(branchName);
				dto.setValue(branchName);
				branchDtos.add(dto);
			});
		}
		return branchDtos;
	}

	@PostMapping
	public Phone addPhone(@RequestBody Phone phone) {
		return phoneRepository.save(phone);
	}

	@PutMapping("/{id}")
	public Phone updatePhone(@PathVariable Long id, @RequestBody Phone phone) {
		phone.setId(id);
		return phoneRepository.save(phone);
	}

	@DeleteMapping("/{id}")
	public void deletePhone(@PathVariable Long id) {
		phoneRepository.deleteById(id);
	}
}
