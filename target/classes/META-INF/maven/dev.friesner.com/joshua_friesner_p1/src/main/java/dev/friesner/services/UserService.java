package dev.friesner.services;

import java.io.ByteArrayOutputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.ObjectOutputStream;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import dev.friesner.models.User;
import dev.friesner.repos.UserDAO;
import io.javalin.http.Context;
import kotlin.Pair;


public class UserService implements Serializable {
	
//	private static UserDAO ud = new UserDAO();
	private UserDAO ud;
	
	
	public  UserService(UserDAO ud) {
		this.ud = ud;
	}
	

	
//	public Pair<String, User>  createUser(String sStrng, User u) {
//	public Map<String, User>  createUser(User u) throws IOException {
	public User createUser(User u) throws IOException {
		
//		Object eePic = u.getEmployee_pic();
//		ByteArrayOutputStream bos = new ByteArrayOutputStream();
//	      ObjectOutputStream oos = new ObjectOutputStream(bos);
//	      oos.writeObject(eePic);
//	      oos.flush();
//	      byte [] data = bos.toByteArray();
//	      
//	      u.setEmployee_pic(data);
		
		System.out.println("Here is user in service " + u.toString());
		
//		Map<String, User> u2 = ud.createUser(u);
		User u2 = ud.createUser(u);
		
		return u2;
	}
	
	public List<User> getAllUsers() {
		List<User> userList = ud.getAllUsers();
		
		return userList;
	}
	
	public User getUserById(int id) {
		
		User u = ud.getUserById(id);
		
		return u;
		
	}
	

	
	//User Actions
	public User updateUser(User u) {
		
		User newUser = ud.updateUser(u);
		
		
		return newUser;
		
		
	}
	
	
	public User loginUser(Context ctx) throws FileNotFoundException, IOException, InterruptedException {
		User u = ctx.bodyAsClass(User.class);
		
		User newUser = this.getUserByUserName(u.getUsername(), u.getPasswrd());
		System.out.println("here is new user from login service");
		System.out.println(newUser.toString());
		return newUser;
		
	}
	
	public User getUserByUserName(String username, String passwrd) throws FileNotFoundException, IOException, InterruptedException {
//		User u = new User();
		
		User u = ud.getUserByUserName(username, passwrd);
//		User mockUser = new User(1,"greg","mcbiggins","email","user","pass",1000,1);
		
//		System.out.println(u.toString());
		
//		if(mockUser != null) {
		if(u != null) {
			
			if(u.getPasswrd().equals(passwrd)) {
				
				System.out.println("I made it back to service");
				System.out.println(u);
//				return u;
				return u;
				
			}else {
				
				System.out.println("Incorrect User");
				return null;
				
			}
		}
		
		return null;
		
	}
	
	
	
	public User patchUserFirstName(int id, String newFirstName, User u) {
		
//		patchUserFirstName(int id, String newFirstName, User u);
		
		User newUser = ud.patchUserFirstName(id, newFirstName, u);
		return newUser;
		
	}
	
	
	public User patchUserReimburesment(int id, float reimb, User u) {
		
//		patchUserFirstName(int id, String newFirstName, User u);
		
		User newUser = ud.patchUserReimburesment(id, reimb, u);
		return newUser;
		
	}
	
	

	
	


}
