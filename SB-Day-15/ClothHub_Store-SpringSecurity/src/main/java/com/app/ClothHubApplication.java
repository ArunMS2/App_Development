package com.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan({"com"})

@EntityScan({"com.app.entity"})
public class ClothHubApplication {

	public static void main(String[] args) {
		SpringApplication.run(ClothHubApplication.class, args);
	}

}
