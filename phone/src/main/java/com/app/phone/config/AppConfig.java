//package com.app.phone.config;
//
//import javax.sql.DataSource;
//
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.context.annotation.Primary;
//
//import com.zaxxer.hikari.HikariDataSource;
//
//@Configuration
//public class AppConfig {
//	@Value("${spring.datasource.url}")
//	private String url;
//
//	@Value("${spring.datasource.username}")
//	private String username;
//
//	@Value("${spring.datasource.password}")
//	private String password;
//
//	@Value("${spring.datasource.driver-class-name}")
//	private String driverClassName;
//
//	@Value("${spring.datasource.hikari.maximum-pool-size}")
//	private int maximumPoolSize;
//
//	@Value("${spring.datasource.hikari.minimum-idle}")
//	private int minimumIdle;
//
//	@Bean
//	@Primary
//	public DataSource dataSource() {
//		HikariDataSource dataSource = new HikariDataSource();
//		dataSource.setJdbcUrl(url);
//		dataSource.setUsername(username);
//		dataSource.setPassword(password);
//		dataSource.setDriverClassName(driverClassName);
//		dataSource.setMaximumPoolSize(maximumPoolSize);
//		dataSource.setMinimumIdle(minimumIdle);
//		return dataSource;
//	}
//}
