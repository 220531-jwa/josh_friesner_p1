package dev.friesner.controllers;

import java.io.ByteArrayOutputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.ObjectOutputStream;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import org.eclipse.jetty.util.ajax.JSON;

//import javafx.util.Pair;

import dev.friesner.models.User;
import dev.friesner.repos.UserDAO;
import dev.friesner.services.UserService;
import io.cucumber.gherkin.internal.com.eclipsesource.json.Json;
import io.javalin.http.Context;
import kotlin.Pair;

public class UserController {
	
	
	
	public static UserDAO ud = new UserDAO();
	public static UserService us = new UserService(ud);
//	private static UserService us = new UserService();

//	private static Pair<String, User> firstPair = new Pair<String, User>(null, null);
	
	public static void createUser(Context ctx) throws IOException {
		
		User u = ctx.bodyAsClass(User.class);

		System.out.println("Here is user in controller " + u.toString());
		
		String myContr="";
//		User newUser = new User();
		
		System.out.println(u.getEmployee_pic());
		
		System.out.println(u);

		
		User newUser = us.createUser(u);
			
		
//		for ( Map.Entry<String, User> myNewMapp : us.createUser(u).entrySet()) {
//		    myContr = myNewMapp.getKey();
//		    if(myNewMapp.getValue() != null) {
//		    	
//		    	newUser = myNewMapp.getValue();
//		    }
		    // do something with key and/or tab
//		};
		
//		
//		
//		for ( Map.Entry<String, User> entry : us.createUser(u).entrySet()) {
//		    myContr = entry.getKey();
//		    newUser = entry.getValue();
//		    // do something with key and/or tab
//		};
		
		if(newUser == null && myContr == "Please Select a new UserName") {
			ctx.status(406);
			ctx.json(myContr);
			ctx.result(myContr);
			
		}else if(newUser != null) {
			
			System.out.println("Why hello");
			ctx.status(200);
			ctx.json(newUser);
//			ctx.result(myContr);
			
		}else {
			
			System.out.println(myContr);
			ctx.status(404);
			ctx.result(myContr);
			ctx.json(myContr);
			
//			ctx.json(newUser);
			
		}
		
		
		
//		User u = us.createUser(null);
		
		
	}
	
	public static void getAllUsers(Context ctx) {
		
		List<User> userList = us.getAllUsers();
		
		ctx.json(userList);
		ctx.status(200);
		
	}
	
	public static void getUserById(Context ctx) {
		
		 
		int id = Integer.parseInt(ctx.pathParam("id"));
		
		 User u = us.getUserById(id);
		 
		 
		 if(u != null) {
			 ctx.status(200);
			 ctx.json(u);
		 }
		
	}









	//User actions
	
	public static void updateUser(Context ctx) {
		
		User u = ctx.bodyAsClass(User.class);
		
		
		
		us.updateUser(u);
	}
	
	
	public static void patchUser(Context ctx) {
		User u = ctx.bodyAsClass(User.class);
		
		
		
		us.updateUser(u);
	}



	
	public static void loginUser(Context ctx) throws FileNotFoundException, IOException, InterruptedException{
		
		User u = us.loginUser(ctx);
		
		if(u != null) {
			System.out.println("here is user inside controller");
			System.out.println(u.toString());
			ctx.json(u);
			ctx.status(200);
		}else {
			System.out.println("we have error");
		}
//		String username = ctx.queryParam("username");
//		String passwrd = String.parse(ctx.pathParam("passwrd"));
//		User loggedInUser = us.getUserByUserName(u);
		
//		return u;
		
	}


	public static void patchUserFirstName(Context ctx) {
//		patchUserFirstName(int id, String newFirstName, User u)
		
		System.out.println("made it to controller");
		User incomingUser = ctx.bodyAsClass(User.class);
		int id = incomingUser.getId();
		String fname = incomingUser.getFirst_name();
		
//		us.patchUserFirstName(0, null, incomingUser)
		
		User u = us.patchUserFirstName(id, fname, incomingUser);
		
		ctx.json(u);
		ctx.status(200);
		
	}
	

	public static void patchUserReimbursementAmnt(Context ctx) {
//		patchUserFirstName(int id, String newFirstName, User u)
		
		System.out.println("made it to controller");
		User incomingUser = ctx.bodyAsClass(User.class);
		int id = incomingUser.getId();
		float reimb = incomingUser.getReimbursement_amount();
		
//		us.patchUserFirstName(0, null, incomingUser)
		
		User u = us.patchUserReimburesment(id, reimb, incomingUser);
		
		ctx.json(u);
		ctx.status(200);
		
	}
	





}
