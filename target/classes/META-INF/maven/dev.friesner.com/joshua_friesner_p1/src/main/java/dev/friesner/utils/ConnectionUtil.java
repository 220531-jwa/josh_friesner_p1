package dev.friesner.utils;

import java.io.IOException;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Properties;

// This class will define the methods needed to create a connection to our DB.
// we are going to make ConnectionUtil using the Singleton Design Pattern.
// to ensure that only one instance of the class exists throughout the program.

public class ConnectionUtil {
	
	private static ConnectionUtil cu;
	private static Properties dbProps;
	
	// private constructions
	private ConnectionUtil() {
		// initialize the properties object to hold our db credentials
		dbProps = new Properties();
		
		// Stream the credentials from our connection.properties file to this object.
		
		InputStream props = ConnectionUtil.class.getClassLoader().getResourceAsStream("connection.properties");
		try {
			dbProps.load(props);
		}catch(IOException e) {
			e.printStackTrace();
		}
		
	}
	
		
	// public getter to return us an instance of this class -> a ConnectionUtil
	// synchronized only one thread can access this at one time.
	public static synchronized ConnectionUtil getConnectionUtil() {
		
		// first check if an instance already exists
		if(cu == null) {
			cu = new ConnectionUtil();
		}
		//otherwise return existing instance
		return cu;
		
	}
	
	
	
	
	// Method to actually establish a connection to the dB
	public Connection getConnection() {
		
		Connection conn = null;
		
		try {
			Class.forName(dbProps.getProperty("driver"));
		}catch(ClassNotFoundException e1){
			e1.printStackTrace();
			
		}
		
		// get our credentials from the ConnectionUilt's properties object that we created in the constructor
		String url = dbProps.getProperty("url");
		String username = dbProps.getProperty("username");
		String password = dbProps.getProperty("password");
		
		// use those credentials  and the DriverManager to connect to our db instance
		try{
			conn = DriverManager.getConnection(url,username,password);
		}catch(SQLException e) {
			e.printStackTrace();
		}
		
		return conn;
	}
	
	
	// the below code is just to manually test that we can make a connection
	//DO NOT LEAVE THIS IN ANY PROJECT
	
	
//	public static void main(String[] args) {
//		
//		Connection connection = getConnectionUtil().getConnection();
//		
//		if(connection != null) {
//			System.out.println("Connection successful");
//		} else {
//			System.out.println("Something went wrong");
//		}
//		
//		String sqlStr = "select * from users";
//		
//		
//		    try (Statement stmt = connection.createStatement()) {
//		      ResultSet rs = stmt.executeQuery(sqlStr);
//		      while (rs.next()) {
////		        String coffeeName = rs.getString("COF_NAME");
//		        int ID = rs.getInt("id");
//		        String firstName = rs.getString("first_name");
//		        String lastName = rs.getString("last_name");
//		        String userName = rs.getString("username");
//		        String passwrd = rs.getString("pass");
//
//		        System.out.println(ID + ", " + firstName + ", " + lastName + ", " + userName +
//		                           ", " + passwrd);
//		      }
//		    } catch (SQLException e) {
////		      JDBCTutorialUtilities.printSQLException(e);
//		      e.printStackTrace();
//		    }
//		
//		
//		
//		try {
//			
//			connection.close();
//			
//		}catch(SQLException e) {
//			e.printStackTrace();
//		}
//	}
	
	
	
	
	
	
	
	
	
	
	
	
	

}
