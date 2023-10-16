package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.CustomerSupport;
import com.example.demo.service.CustomerService;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:3000")
public class Customercontroller {

	@Autowired
	CustomerService cservice;
	
	@GetMapping("/fblist")
	private List<CustomerSupport> getProduct(){
		return cservice.getData();
	}
	@PostMapping("/addsupport")		
	public void addSupport(@RequestBody CustomerSupport e) {
		cservice.addSupport(e);
	}
}
