package dev.friesner;

import static io.javalin.apibuilder.ApiBuilder.path;
import static io.javalin.apibuilder.ApiBuilder.post;
import static io.javalin.apibuilder.ApiBuilder.get;
import static io.javalin.apibuilder.ApiBuilder.patch;

import dev.friesner.controllers.RequestController;
import dev.friesner.controllers.UserController;
import dev.friesner.models.EventModel;
import dev.friesner.models.Requests;
import io.javalin.Javalin;
import io.javalin.http.staticfiles.Location;

public class Main {
	
	public static void main(String[] args) {
		
//		Javalin app = new Javalin();
		
		Javalin app = Javalin.create(config ->{
//			config.enableCorsForOrigin("http://localhost:8082");
			config.addStaticFiles("./public/",Location.CLASSPATH);
		});
		
		app.start(8082);
		
		app.routes(()-> {
			path("/login",()->{
				post(UserController::loginUser);
				
			});
			path("/users",()->{
				
				path("/{id}",()->{
					
					get(UserController::getUserById);
					
					path("/update",()->{
						path("/fname", ()->{
							patch(UserController::patchUserFirstName);
						});
						path("/reimburst", ()->{
							patch(UserController::patchUserReimbursementAmnt);
						});
					});
					
					
					
					
					
					path("/requests",()->{
						
						post(RequestController::createRequest);
						
						path("/ee",()->{
								path("/all",()->{
									get(RequestController::getAllRequestsByEEId);										
								});
								path("/{reqid}", ()->{
									get(RequestController::getRequestByIdEE);
									
									
									path("/update",() -> {
										patch(RequestController::patchReqEventType);
										
									});
									
									
									
									
									
									path("/type",() -> {
										patch(RequestController::patchReqEventType);
										
									});
									
									path("/status", ()->{
										patch(RequestController::updateStatus);
										
									});
									path("/updatenotes", ()->{
										patch(RequestController::updateRequestNotes);
										
									});
									path("/updategrading", ()->{
										patch(RequestController::updateRequestNotes);
										
									});
									path("/updatewrj", ()->{
										patch(RequestController::updateRequestNotes);
										
									});
									path("/updateEvntReimbsPerc", ()->{
										patch(RequestController::updateRequestNotes);
										
									});
									path("/updateInstructor", ()->{
										patch(RequestController::updateRequestNotes);
										
									});
									path("/updateAmountToBeReimbursed", ()->{
										patch(RequestController::updateAmountToBeReimbursed);
										
									});
									path("/crazy", ()->{
										patch(RequestController::updateCrazy);
										
									});
								});
							});
							
							
						// GET ALL BY FINANCE MANAGER ID to see all their requests from employees
						path("/fnmngr",()->{
							path("/getallassigned", ()->{
								get(RequestController::getAllReqByFinanceMngrId);
							});
							path("/getallfnmngrrequests", ()->{
//								get(RequestController::getAllReqByFinanceMngrId);
								get(RequestController::getAllRequestsByEEId);
							});
							path("/getallrequests", ()->{
//								get(RequestController::getAllReqByFinanceMngrId);
								get(RequestController::getAllRequests);
							});
							
							path("/getbyId", ()->{
								path("/{reqId}", ()->{
									get(RequestController::getRequestByIdFNMngr);
								
									path("/update",() -> {
										patch(RequestController::patchRequest);
										
									});
										path("/type",() -> {
											patch(RequestController::patchReqEventType);
											
										});
										
										path("/status", ()->{
											patch(RequestController::updateStatus);
											
										});
										path("/updatenotes", ()->{
											patch(RequestController::updateRequestNotes);
											
										});
										path("/updategrading", ()->{
											patch(RequestController::updateRequestNotes);
											
										});
										path("/updatewrj", ()->{
											patch(RequestController::updateRequestNotes);
											
										});
										path("/updateEvntReimbsPerc", ()->{
											patch(RequestController::updateRequestNotes);
											
										});
										path("/updateInstructor", ()->{
											patch(RequestController::updateRequestNotes);
											
										});
										path("/updateAmountToBeReimbursed", ()->{
											patch(RequestController::updateAmountToBeReimbursed);
											
										});
										path("/crazy", ()->{
											patch(RequestController::updateCrazy);
											
										});
									});
								});
							});
						});
					});
					
				});
				get(UserController::getAllUsers);
				post(UserController::createUser);
			});
//		});
		
	}
	
	
	
	
	
	
	
}
