package dev.friesner.repos;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.openqa.selenium.WebDriver;

import dev.friesner.models.User;

//import com.revature.model.User;

import dev.friesner.models.*;
//import com.revature.runners.LoginRunner;

import dev.friesner.services.UserService;




@ExtendWith(MockitoExtension.class)

class UserServiceJUnittesting {
	
	// an instance of the class that we are testing - a REAL instance
	@InjectMocks
	private static UserService userService;
	

	
	// since we want to test only the functionality of the UserService class
	// we will Mock any dependencies that class relies on...
	@Mock
	private static UserDAO mockUserDao;
	
//	public String anyString;
	
//	private WebDriver driver = LoginRunner.driver;
	

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		
		userService = new UserService(mockUserDao);
		
	
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		
		
		
	}

	@Test
	void testWriteByte() {
		fail("Not yet implemented");
	}

	@Test
	void testCreateUser() {
		fail("Not yet implemented");
	}

	@Test
	void testGetAllUsers() {
		
		// given - 3 users in DB
		List<User> usersMock = new ArrayList<>();
		
		usersMock.add( new User(1,"greg","mcbiggins","email","user","pass",1000,1));
		usersMock.add( new User(2,"jeffy","poo","email","user","pass",1000,1));
		usersMock.add( new User(3,"cora","girl","email","user","pass",1000,1));

		// when - User servic's getAllUsers method is called
		when(mockUserDao.getAllUsers()).thenReturn(usersMock);	
		
		// then - it Should return all users
		assertEquals(usersMock,userService.getAllUsers());
				
//		fail("Not yet implemented");
	}

	@Test
	void testGetUserById() {
		
		
		User u = new User(1,"greg","mcbiggins","email","user","pass",1000,1);
		
		when(mockUserDao.getUserById(1)).thenReturn(u);
		
		assertEquals(u,userService.getUserById(1));
		
		
		
//		fail("Not yet implemented");
	}

	@Test
	void testUpdateUser() {
		fail("Not yet implemented");
	}
	
	//	#Passes
	@Test
	void testGetUserByUserName() {
		
		User u = new User(1,"greg","mcbiggins","email","user","pass",1000,1);
		
		when(mockUserDao.getUserById(1)).thenReturn(u);
		
		assertEquals(u,userService.getUserById(1));
		
		
		
//		fail("Not yet implemented");
//		fail("Not yet implemented");
	}
	
	//	#Passes
	@Test
	public void loginWithValidInput() throws FileNotFoundException, IOException, InterruptedException{
		
		
//		User mockUserdos = new User(1,"greg","mcbiggins","email","user","pass","Associate",1000,1);
		User mockUser = new User();
				mockUser.setId(1);
				mockUser.setFirst_name("greg");
				mockUser.setLast_name("mcbiggins");
				mockUser.setEmail("email");
				mockUser.setUsername("user"); 
				mockUser.setPasswrd("pass"); 
				mockUser.setRole("Associate"); 
				mockUser.setFinanceMngrId(1); 
				mockUser.setReimbursement_amount((float) 1000.00);
		when(mockUserDao.getUserByUserName("user",  "pass")).thenReturn(mockUser);


		User loggedInUser = userService.getUserByUserName("user", "pass");
		
		
		assertEquals(mockUser,loggedInUser);
		
	}

	//	#Passes	
	@Test
	public void loginWithInvalidInput() throws FileNotFoundException, IOException, InterruptedException {
		
		User mockUser = new User();
		mockUser.setId(1);
		mockUser.setFirst_name("greg");
		mockUser.setLast_name("mcbiggins");
		mockUser.setEmail("email");
		mockUser.setUsername("user"); 
		mockUser.setPasswrd("pass"); 
		mockUser.setRole("Associate"); 
		mockUser.setFinanceMngrId(1); 
		mockUser.setReimbursement_amount((float) 1000.00);
		
		when(mockUserDao.getUserByUserName(anyString(),  anyString())).thenReturn(null);
		
		User loggedInUser = userService.getUserByUserName("user", "passwrd");
		assertEquals(null,loggedInUser);
		
		
		
	}

}
