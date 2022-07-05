package dev.friesner.models;

import java.io.File;
import java.io.InputStream;
//import java.io.File;
import java.io.Serializable;
import java.sql.Blob;
import java.sql.Date;


// enum Roles {
//	private String Associate = "Associate";
//	private String financeManager = "financeManager";
//};


public class User implements Serializable {
	
//    A user (Employee or Finance Manager) can login to the app using their credentials
//A user (Employee) can submit a request for reimbursement
//A user (Employee) can see the status of their current and past reimbursements
//A user (Employee) can update their reimbursement request to include their grade/presentation
//A Finance Manager can view all reimbursement requests
//A Finance Manager can approve or reject reimbursement requests
//A Finance Manager can update the status of a reimbursement request once the Employee has submitted their grade/presentation
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	//Information
	private int id;
	private String first_name;
	private String last_name;
	private String email;
	private String phone;
	private Date dob;
	private String address;
	private String city;
	private String state;
	private String zip;
	//login
	private String username; // make sure this is a unique field
	private String passwrd;
	private RolesEnum role;
	private int financeMngrId;
	//reimbursements
	private float reimbursement_amount;
//	private byte[] employee_pic;
//	private File[] employee_pic;
//	private File employee_pic;
//	private File employee_pic;
	private Blob employee_pic;
	
	
	public User(int id, String first_name, String last_name, String email, Date dob, String address, String city,
			String state, String zip, String username, String passwrd, Float reimbursement_amount) {
		super();
		this.id = id;
		this.first_name = first_name;
		this.last_name = last_name;
		this.email = email;
		this.dob = dob;
		this.address = address;
		this.city = city;
		this.state = state;
		this.zip = zip;
		this.username = username;
		this.passwrd = passwrd;
		this.reimbursement_amount = reimbursement_amount;
	}


	public User(int int1, String string, String string2, String string3, String string4, String string5, float float1,
			int int2) {
		// TODO Auto-generated constructor stub
	}


	public User(Object setId, Object setFirst_name, Object setLast_name, Object setEmail, Object setUsername,
			Object setPasswrd, Object setReimbursement_amount, Object setFinanceMngrId) {
		// TODO Auto-generated constructor stub
	}
	
	


	public User(int id, String first_name, String last_name, String email, String phone, String address, String city,
			String state, String zip, String username, String passwrd, RolesEnum role, int financeMngrId,
			float reimbursement_amount) {
		super();
		this.id = id;
		this.first_name = first_name;
		this.last_name = last_name;
		this.email = email;
		this.phone = phone;
		this.address = address;
		this.city = city;
		this.state = state;
		this.zip = zip;
		this.username = username;
		this.passwrd = passwrd;
		this.role = role;
		this.financeMngrId = financeMngrId;
		this.reimbursement_amount = reimbursement_amount;
	}
	
	
	
	
	



	public User(int id, String first_name, String last_name, String email, String username, String passwrd,
			RolesEnum role, int financeMngrId, float reimbursement_amount) {
		super();
		this.id = id;
		this.first_name = first_name;
		this.last_name = last_name;
		this.email = email;
		this.username = username;
		this.passwrd = passwrd;
		this.role = role;
		this.financeMngrId = financeMngrId;
		this.reimbursement_amount = reimbursement_amount;
	}


	public User(int i, String string, String string2, String string3, String string4, String string5, String string6,
			int j, int k) {
		// TODO Auto-generated constructor stub
	}


	public User() {
		// TODO Auto-generated constructor stub
	}


	public void setRole(RolesEnum role) {
		this.role = role;
	}


	public void setReimbursement_amount(float reimbursement_amount) {
		this.reimbursement_amount = reimbursement_amount;
	}


	public Blob getEmployee_pic() {
		return employee_pic;
	}


	public void setEmployee_pic(Blob employee_pic) {
		this.employee_pic = employee_pic;
	}


	public String getPhone() {
		return phone;
	}


	public void setPhone(String phone) {
		this.phone = phone;
	}


	public int getFinanceMngrId() {
		return financeMngrId;
	}


	public void setFinanceMngrId(int financeMngrId) {
		this.financeMngrId = financeMngrId;
	}


	
	

//	public User(int i, String string, String string2, String string3, String string4, String string5, String string6, int j, int k) {
//		super();
//		// TODO Auto-generated constructor stub
//	}


	


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getFirst_name() {
		return first_name;
	}


	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}


	public String getLast_name() {
		return last_name;
	}


	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public Date getDob() {
		return dob;
	}


	public void setDob(Date dob) {
		this.dob = dob;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	public String getCity() {
		return city;
	}


	public void setCity(String city) {
		this.city = city;
	}


	public String getState() {
		return state;
	}


	public void setState(String state) {
		this.state = state;
	}


	public String getZip() {
		return zip;
	}


	public void setZip(String zip) {
		this.zip = zip;
	}


	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public String getPasswrd() {
		return passwrd;
	}


	public void setPasswrd(String passwrd) {
		this.passwrd = passwrd;
	}


	public Float getReimbursement_amount() {
		return reimbursement_amount;
	}


	public void setReimbursement_amount(Float reimbursement_amount) {
		this.reimbursement_amount = reimbursement_amount;
	}


	public String getRole() {
		return this.role.name();
	}


	public void setRole(String roleStrng) {
		
		
//		role.getType();/
//		role = RolesEnum.valueOf(roleStrng);
		this.role = RolesEnum.valueOf(roleStrng);
	}


	@Override
	public String toString() {
		return "User [id=" + id + ", first_name=" + first_name + ", last_name=" + last_name + ", email=" + email
				+ ", phone=" + phone + ", dob=" + dob + ", address=" + address + ", city=" + city + ", state=" + state
				+ ", zip=" + zip + ", username=" + username + ", passwrd=" + passwrd + ", role=" + role
				+ ", financeMngrId=" + financeMngrId + ", reimbursement_amount=" + reimbursement_amount
				+ ", employee_pic=" + employee_pic + "]";
	}


	
	
	



	



	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
