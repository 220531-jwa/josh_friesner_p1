package dev.friesner.repos;


import dev.friesner.utils.*;
//import kotlin.Pair;
import io.opentelemetry.exporter.logging.SystemOutLogExporter;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.ObjectOutputStream;
import java.io.OutputStream;
import java.sql.Blob;
import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.eclipse.jetty.util.ajax.JSON;
import org.postgresql.largeobject.LargeObject;
import org.postgresql.largeobject.LargeObjectManager;

import dev.friesner.models.RolesEnum;
import dev.friesner.models.User;

//import com.revature.utils.ConnectionUtil;

//import dev.friesner.models.User;


public class UserDAO {

	private static ConnectionUtil cu = ConnectionUtil.getConnectionUtil();
	private static UserDAO ud = new UserDAO();
	
//	public Pair<String, User> createUser(User u) {
//	public Map<String, User> createUser(User u) throws IOException {
	
	static String FILEPATH = "";
    static File file = new File(FILEPATH);
 
    // Method 1
    // To write the bytes into a file
    static void writeByte(byte[] bytes)
    {
 
        // Try block to check for exceptions
        try {
 
            // Initialize a pointer in file
            // using OutputStream
            OutputStream os = new FileOutputStream(file);
 
            // Starting writing the bytes in it
            os.write(bytes);
 
            // Display message onconsole for successful
            // execution
            System.out.println("Successfully"
                               + " byte inserted");
 
            // Close the file connections
            os.close();
        }
 
        // Catch block to handle the exceptions
        catch (Exception e) {
 
            // Display exception on console
            System.out.println("Exception: " + e);
        }
    }
    
    
	public User createUser(User u) throws IOException {
		
		Map<String,User> myMap = new HashMap<String,User>();
	
		
		///RETRY this
		
		String eePic = u.getEmployee_pic().toString();
		
//		ByteArrayInputStream bais = new ByteArrayInputStream();
		
		
		ByteArrayOutputStream bos = new ByteArrayOutputStream();
	    ObjectOutputStream oos = new ObjectOutputStream(bos);
	      
	      oos.writeObject(eePic.toString());
	      oos.flush();
	      byte [] data = bos.toByteArray();
	      
	      System.out.println("Here is data dao " + data.toString());
	      
//	      FileInputStream fis = new FileInputStream(eePic.toString());
//	      InputStream ist= new InputStream(data.toString());
	      
	      ByteArrayInputStream bais= new ByteArrayInputStream(data);
	      System.out.println("Here is data available bytes " +bais.available());
//	      bais.readAllBytes();
	      
	      
//		WriteObjectToFile(u.getEmployee_pic());
		
		System.out.println("Here is user in dao " + u.toString());
//		byte [] data = bos.toByteArray();
		String myContrl = "";
		String sql = "INSERT INTO users(id, "
				+ "first_name,"
				+ "last_name,"
				+ "email,"
				+ "username,"
				+ "passwrd,"
				+ "reimbursement_amount,"
				+ "finance_manager,"
				+ "roles,"
				+ "employee_pic"
				+ ") values (default,?,?,?,?,?,?,?,?,?);";

		try(Connection conn = cu.getConnection()){
			
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setString(1, u.getFirst_name());
			ps.setString(2, u.getLast_name());
			ps.setString(3, u.getEmail());
			ps.setString(4, u.getUsername());
			ps.setString(5, u.getPasswrd());
			ps.setFloat(6, u.getReimbursement_amount());
			ps.setInt(7, u.getFinanceMngrId());
			ps.setString(8, u.getRole().toString());
//			ps.setBytes(9, (byte[]) u.getEmployee_pic());
//			ps.setBytes(9, u.getEmployee_pic());
//			File file = new File(u.getEmployee_pic());
			
			
			
			
			// ******************************************
			// FIX THIS
			
			
			
			ps.setBlob(9, bais, 0);
			
			Blob eePicFile = u.getEmployee_pic();
			FileInputStream fis = new FileInputStream(eePicFile.toString());
			
//			writeByte(u.getEmployee_pic());
			
			ps.setBinaryStream(9, fis, fis.available());
//			ps.setBinaryStream(9, u.getEmployee_pic(), u.getEmployee_pic().length);
//			ps.setBinaryStream(9, bais, bais.available());
			
//			ps.setBytes(9, (byte[]) u.getEmployee_pic());
			
			
			
			
			boolean didExec = ps.execute();
			
			if(didExec == true) {
				
				myContrl = "You successfully made an employee.";
//				Map<String,User> myMap = new HashMap(myContrl,u);
				myMap.put(myContrl, u);
				ps.close();
//				fis.close();
				return u;
			}
			
		}catch(SQLException e){

//			e.printStackTrace();
			int errCode = e.getErrorCode();
			String msg = e.getMessage();
			
//			System.out.println("*****DAO********");
//			System.out.println("below is error code");
//			System.out.println(errCode);
//			System.out.println("below is msg");
//			System.out.println(msg);
			
			String dupUserName = "ERROR: duplicate key value violates unique constraint \"users_username_key\"";
			msg = msg.toString();
			if(msg.contains(dupUserName)) {
				myContrl = "Please Select a new UserName";
				myMap.put(myContrl, null);
				return null;
			}else {
				myContrl = "we have an error.";
				System.out.println(msg);
				myMap.put(myContrl, null);
				return null;
			}
			
			
				
		}

		return null;
	}
	
	
//	public void WriteObjectToFile(Object serObj) {
//		 
//        try {
// 
//            FileOutputStream fileOut = new FileOutputStream(filepath);
//            ObjectOutputStream objectOut = new ObjectOutputStream(fileOut);
//            objectOut.writeObject(serObj);
//            objectOut.close();
//            System.out.println("The Object  was succesfully written to a file");
// 
//        } catch (Exception ex) {
//            ex.printStackTrace();
//        }
//    }
	
	
	public List<User> getAllUsers() {
		List<User> userList = new ArrayList<>();
		
		String sql = "SELECT * FROM users";
		
		try(Connection conn = cu.getConnection()){
			PreparedStatement ps = conn.prepareStatement(sql);
			
			ResultSet rs = ps.executeQuery();
			
			while(rs.next()) {
//				int id = ;
//				String first_name = rs.getString("first_name");
//				String last_name = rs.getString("last_name");
//				String email = rs.getString("Email");
//				Date dob
//				String address
//				String city
//				String state
//				String zip
//				String username = ;
//				String passwrd = ;
//				Float reimbursement_amount) {
				User uDos = new User();
						uDos.setId(rs.getInt("id"));
						uDos.setFirst_name(rs.getString("first_name"));
						uDos.setLast_name(rs.getString("last_name"));
						uDos.setEmail(rs.getString("Email"));
						uDos.setUsername(rs.getString("username"));
						uDos.setPasswrd(rs.getString("passwrd"));
						uDos.setReimbursement_amount(rs.getFloat("reimbursement_amount"));
						uDos.setFinanceMngrId(rs.getInt("finance_manager"));
						uDos.setRole(rs.getString("roles"));
				
				 
				userList.add(uDos);
			}
			
			return userList;
			
		}catch(SQLException e) {
			e.printStackTrace();
		}
		
		return userList;
	}
	
	public User getUserById(int id) {
		
		User u = new User();
		String sql = "Select * FROM users where id = ?";
		
		try(Connection conn = cu.getConnection()){
			
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setInt(1, id);
			
			ResultSet rs = ps.executeQuery();
			
			if(rs != null) {
				rs.next();
				
				u.setId(rs.getInt("id"));
				u.setFirst_name(rs.getString("first_name"));
				u.setLast_name(rs.getString("last_name"));
				u.setEmail(rs.getString("Email"));
				u.setUsername(rs.getString("username"));
				u.setPasswrd(rs.getString("passwrd"));
				u.setReimbursement_amount(rs.getFloat("reimbursement_amount"));
				u.setFinanceMngrId(rs.getInt("finance_manager"));
				u.setRole(rs.getString("roles"));
				
				
				
				
				
				
			}
			
		}catch(SQLException e) {
			e.printStackTrace();
		}
		
		return u;
		
	}


	
	
	//User Actions
	public User getUserByUserName(String username, String passwrd) throws FileNotFoundException, IOException, InterruptedException {
		
		
		User u = new User();
		String sql = "Select * From users WHERE username = ?";
		
		try(Connection conn = cu.getConnection()){
			conn.setAutoCommit(false);
			LargeObjectManager lobj = ((org.postgresql.PGConnection)conn).getLargeObjectAPI();
			PreparedStatement ps = conn.prepareStatement(sql);
			
			ps.setString(1, username);
			ResultSet rs = ps.executeQuery();
			
			ResultSetMetaData rsmd = rs.getMetaData();
			int fieldSize = rs.getFetchSize();
			
			System.out.println("here is field size " + fieldSize);
			
			if(rs.next()) {
				u.setId(rs.getInt("id"));
				u.setFirst_name(rs.getString("first_name"));
				u.setLast_name(rs.getString("last_name"));
				u.setEmail(rs.getString("email"));
				u.setUsername(rs.getString("username"));
				u.setPasswrd(rs.getString("passwrd"));
				u.setReimbursement_amount(rs.getFloat("reimbursement_amount"));
				u.setFinanceMngrId(rs.getInt("finance_manager"));
				u.setRole(rs.getString("roles"));
				
//				u.setEmployee_pic(rs.getBlob("employee_pic"));
				
				
//				Blob oid = rs.getBlob("employee_pic");

//				LargeObject obj = lobj.createLO(oid);
				
				
				//READ DATA
//				Byte buf[] = new byte[obj.size()];
				
				
//				if(rs.getBytes("employee_pic").length > 0) {
////					byte[] imgBytes = rs.getBinaryStream("employee_pic");
//					InputStream inpts = rs.getBinaryStream("employee_pic");
//					
////					try (FileOutputStream outputStreams = new FileOutputStream(imgBytes.toString())) {
//					try (FileOutputStream outputStreams = new FileOutputStream("employee_pic")) {
////						OutputStream ops= new OutputStream(imgBytes.toString());
//					    outputStreams.write(inpts.read());
////					    outputStreams.flush();
////					    outputStreams.write(rs.getBinaryStream("employee_pic"),1, rs.getBinaryStream("employee_pic").available());
//					    File fle = new File(outputStreams.toString());
////					    u.setEmployee_pic(outputStream.);
//					    outputStreams.close();
////					    u.setEmployee_pic(fle);
//					}
					
//					FileInputStream fis = new FileInputStream(eePicFile);
//					ByteArrayOutputStream bos = new ByteArrayOutputStream();
//				    ObjectOutputStream oos = new ObjectOutputStream(bos);
//				    
//				      oos.writeObject(imgBytes.toString());
//				      oos.flush();
//				      byte [] data = bos.toByteArray();
				      
//				     System.out.println(oos.toString());
				      
					
//					FileOutputStream outputStream = new FileOutputStream(imgBytes.toString());
					

			
					
					
					
//				}
				
				
			return u;
			}
			
		}catch(SQLException e) {
			e.printStackTrace();
			return null;
				
		}
		
		return null;
		
	}

	
	public User patchUserFirstName(int id, String newFirstName, User u) {
		
		String sql = "update users set first_name = ? where id = ?;";
		
		try(Connection conn = cu.getConnection()){
			
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setString(1,newFirstName);
			ps.setInt(2,id);
			
			
			boolean didUpdate = ps.execute();
			int updateCounter = ps.getUpdateCount();
//			int val = ps.executeUpdate();
			System.out.println(didUpdate);
			
			System.out.println("here is getUpdateCount from end of controller");
			System.out.println(updateCounter);
			
			
			User gotUser = ud.getUserById(id);
			System.out.println("here is gotUser from end of controller");
			System.out.println(gotUser);
			
			
			return gotUser;
			
			
			
		}catch(SQLException e) {
			e.printStackTrace();
			
			return null;
		}
		
//		User newUser = new User();
		
		
//		return null;
	}
	
	
	public User patchUserReimburesment(int id, float reimb, User u) {
		
		
		String sql = "update users set reimbursement_amount = ? where id = ?;";
		
		try(Connection conn = cu.getConnection()){
			
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setFloat(1,reimb);
			ps.setInt(2,id);
			
			
			boolean didUpdate = ps.execute();
			int updateCounter = ps.getUpdateCount();
//			int val = ps.executeUpdate();
			System.out.println(didUpdate);
			
			System.out.println("here is getUpdateCount from end of controller");
			System.out.println(updateCounter);
			
			
			User gotUser = ud.getUserById(id);
			System.out.println("here is gotUser from end of controller");
			System.out.println(gotUser);
			
			
			return gotUser;
			
			
			
		}catch(SQLException e) {
			e.printStackTrace();
			
			return null;
		}
		
//		patchUserFirstName(int id, String newFirstName, User u);
		
//		User newUser = ud.patchUserFirstName(id, newFirstName, u);
//		return newUser;
		
	}
	
	
	public User updateUser(User u) {
		
		String sql = "update users set first_name = ? where id = ?;";
		
		try(Connection conn = cu.getConnection()){
			
//			PreparedStatement ps = conn.prepareStatement(sql);
//			ps.setString(1,newFirstName);
//			ps.setInt(2,id);
			
			
//			boolean didUpdate = ps.execute();
			
			return u;
			
			
			
		}catch(SQLException e) {
			e.printStackTrace();
			
			return null;
		}
		
//		User newUser = new User();
		
		
//		return null;
	}
	


	









}
