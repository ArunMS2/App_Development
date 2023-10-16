package com.example.demo.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name="data1")
public class Admin {

	@Id
	// ID Auto generated 
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long cid;
	private String productname;
	private String productcategory;
	private String productdetails;
	private float productprice;
	private String img;
	public Long getCid() {
		return cid;
	}
	public void setCid(Long cid) {
		this.cid = cid;
	}
	public String getProductname() {
		return productname;
	}
	public void setProductname(String productname) {
		this.productname = productname;
	}
	public String getProductcategory() {
		return productcategory;
	}
	public void setProductcategory(String productcategory) {
		this.productcategory = productcategory;
	}
	public String getProductdetails() {
		return productdetails;
	}
	public void setProductdetails(String productdetails) {
		this.productdetails = productdetails;
	}
	public float getProductprice() {
		return productprice;
	}
	public void setProductprice(float productprice) {
		this.productprice = productprice;
	}
	public String getImg() {
		return img;
	}
	public void setImg(String img) {
		this.img = img;
	}
	public Admin(Long cid, String productname, String productcategory, String productdetails, float productprice,
			String img) {
		super();
		this.cid = cid;
		this.productname = productname;
		this.productcategory = productcategory;
		this.productdetails = productdetails;
		this.productprice = productprice;
		this.img = img;
	}
	public Admin() {}
	


}
