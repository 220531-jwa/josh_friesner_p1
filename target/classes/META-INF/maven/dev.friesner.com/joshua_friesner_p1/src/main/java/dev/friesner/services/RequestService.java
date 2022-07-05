package dev.friesner.services;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
//import java.util.ArrayList;
import java.util.List;

import dev.friesner.models.EventModel;
import dev.friesner.models.Requests;
import dev.friesner.models.User;
import dev.friesner.controllers.*;
import dev.friesner.repos.RequestDAO;
import dev.friesner.repos.UserDAO;
import io.javalin.http.Context;

public class RequestService {

	public static RequestDAO rd = new RequestDAO();
	
	public static UserDAO ud = new UserDAO();
	public static UserService uc = new UserService(ud);
	
	
	
	
//	public static RequestService reqS= new RequestService();
	
	public Requests createRequest (Requests r) {
		// post
		Requests newReq = rd.createRequest(r);
		return newReq;
	}
	
	public Requests getRequestById (int id) {
		//get {id} in path
//		Requests newReq = new Requests();
		Requests outGoingReq = rd.getRequestById(id);
		return outGoingReq;
	}
	
	public  List<Requests> getAllRequests () {
		//get
//		List<Requests> lstReq = new ArrayList<Requests>();
		List<Requests> lstReq = rd.getAllRequests();
		
		return lstReq;
	}
	
	public List<Requests> getAllRequestsByEEId (int eeID) {
		// get {EEID}
//		List<Requests> lstReq = new ArrayList<Requests>();
		
		System.out.println("here is id again " + eeID);
		boolean userIs = isUser(eeID);
		
		
		if(userIs) {
			List<Requests> lstReq = rd.getAllRequestsByEEId(eeID);
			
			if(lstReq != null) {
				return lstReq;
			}else {
				return null;
			}
		}
		return null;
	}
	
	public List<Requests> getAllReqByFinanceMngrId (int fmID) {
		// get {FINMNGRID}
//		List<Requests> lstReq = new ArrayList<Requests>();
		
		boolean userIs = isUser(fmID);
		
		if(userIs) {
			List<Requests> lstReq = rd.getAllReqByFinanceMngrId(fmID);
			
			
			if(lstReq != null) {
				return lstReq;
			}else {
				return null;
			}
		}
		
		return null;
	}
	
	
	
	// Updates
	public  Requests updateRequest (Requests r) {
		//post
		Requests updatedReq = rd.updateRequest(r);
		
		return updatedReq;
	}
	
	// Updates
	public Requests updateStatus (int reqID, String reqStatus) {
		//patch
		
		Requests updatedReq = rd.updateStatus(reqID,reqStatus);
		
		return updatedReq;
	}
	
	
	// patch
	public Requests patchRequest(Requests r) {
	
		Requests updatedRequest = rd.updateRequest(r);
		
		return r;
		
	}
			
	// put
	public Requests putRequest(Requests r) {
	
		
		Requests updatedRequest = rd.updateRequest(r);
		
		return r;
		
	}
	
	
	
	
	private boolean isUser(int userId) {
		
		boolean userResult = false;
		
		User u = uc.getUserById(userId);
		
		if(u != null) {
			userResult = true;
		}else {
			userResult = false;
		}
		
		return userResult;
		
	}
			
	
	
	
//	public static void patchReqEventType(Context ctx) {
////		patchUserFirstName(int id, String newFirstName, User u)
//		
//		
//		
//		System.out.println("made it to controller");
//		Requests incomingReq = ctx.bodyAsClass(Requests.class);
//		int id = incomingReq.getReqForID();
//		EventModel event = incomingReq.getEvent();
//		String type = event.getEventType();
//		
////		us.patchUserFirstName(0, null, incomingUser)
//		
////		Requests u = us.patchUserReimburesment(id, reimb, incomingReq);
//		Requests u = us.patchUserReimburesment(id, id, null)
//		
//		ctx.json(u);
//		ctx.status(200);
//		
//	}
	
	
	public Requests patchReqEventType(int reqid, String newEventType, Requests req) {
		
//		patchUserFirstName(int id, String newFirstName, User u);
		Requests newReq = rd.patchReqEventType(reqid, newEventType, req);
//		User newUser = ud.patchReqEventType(id, reimb, u);
		return newReq;
		
	}
	
//	public static void patchReqEventType(Context ctx) {
////		patchUserFirstName(int id, String newFirstName, User u)
//		
//		
//		
//		System.out.println("made it to controller");
//		Requests incomingReq = ctx.bodyAsClass(Requests.class);
//		EventModel event = incomingReq.getEvent();
//		String eventType = event.getEventType();
//		
//		
////		inspect(incomingReq.getClass());
//		
//		
//		int id = incomingReq.getReqForID();
//		EventModel event = incomingReq.getEvent();
//		String type = event.getEventType();
//		
//
//		
//	}
//	
//	
	
	
	public  Requests updateEventGradingFormat(int reqID, String newGrading, Requests r) {
		//patch
		
		Requests req = rd.updateEventGradingFormat(reqID, newGrading, r);
		
		
		return req;
		

	}
	
	
	public  Requests updateRequestNotes(int reqID, String newGrading, Requests r) {
		//patch
		
		Requests req = rd.updateRequestNotes(reqID, newGrading, r);
		
		
		return req;
		

	}
	
	
	
	
	
	public  Requests updateWorkRelatedJustification(int reqID, String newGrading, Requests r) {
		//patch
		
		Requests req = rd.updateWorkRelatedJustification(reqID, newGrading, r);
		
		
		return req;
		

	}
	
	
	
	
	public  Requests updateEventReimburesmentPerc (int reqID, String newGrading, Requests r) {
		//patch
		
		Requests req = rd.updateEventReimburesmentPerc(reqID, newGrading, r);
		
		
		return req;
		

	}
	
	
	
	
	public  Requests updateInstructor (int reqID, String newGrading, Requests r) {
		//patch
		
		Requests req = rd.updateInstructor(reqID, newGrading, r);
		
		
		return req;
		

	}
	
	
	public  Requests updateAmountToBeReimbursed (int reqID, String newGrading, Requests r) {
		//patch
		
		Requests req = rd.updateAmountToBeReimbursed(reqID, newGrading, r);
		
		
		return req;
		

	}
	
	
	
	public Requests updateCrazy (int reqID, String reqcolumnToAlter, Requests r) {
		//patch
		
			Requests req = rd.updateCrazy(reqID, reqcolumnToAlter, r);
			return req;
		

	}


	
	
	
	
}	
			
		
