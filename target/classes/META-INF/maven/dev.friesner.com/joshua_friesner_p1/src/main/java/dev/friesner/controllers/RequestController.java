package dev.friesner.controllers;

import java.lang.reflect.Field;
import java.lang.reflect.Modifier;
import java.util.List;
import java.util.Properties;

import dev.friesner.models.EventModel;
import dev.friesner.models.GradingFormats;
import dev.friesner.models.Requests;
import dev.friesner.models.User;
import dev.friesner.repos.UserDAO;
//import dev.friesner.repos.eventgradingformat;
//import dev.friesner.repos.eventreimburesmentperc;
//import dev.friesner.repos.reqstatus;
import dev.friesner.services.RequestService;
import dev.friesner.services.UserService;
import io.javalin.http.Context;
import io.opentelemetry.exporter.logging.SystemOutLogExporter;

public class RequestController {

	public static RequestService reqS= new RequestService();
	
	public static UserDAO ud = new UserDAO();
	public static UserService us = new UserService(ud);
//	public static UserService us = new UserService();
	
	public static void createRequest(Context ctx) {
		// post
		Requests req = ctx.bodyAsClass(Requests.class);
		
		Requests r = reqS.createRequest(req);
		
		
		ctx.json(r);
		ctx.status(200);
	}
	
	public static void getRequestByIdEE(Context ctx) {
		//get {id} in path
		
		int reqID = Integer.parseInt(ctx.pathParam("reqid"));
		Requests r = reqS.getRequestById(reqID);
		ctx.json(r);
		ctx.status(200);
	}
	
	
	public static void getRequestByIdFNMngr(Context ctx) {
		//get {id} in path
		
		int reqID = Integer.parseInt(ctx.pathParam("reqid"));
		Requests r = reqS.getRequestById(reqID);
		ctx.json(r);
		ctx.status(200);
	}
	
	
	
	
	
	
	
	
	
	public static void getAllRequests(Context ctx) {
		//get
		
		List<Requests> listReqs = reqS.getAllRequests();
		ctx.json(listReqs);
		ctx.status(200);
	}
	
	public static void getAllRequestsByEEId(Context ctx) {
		// get {EEID}
		
		int eeID = Integer.parseInt(ctx.pathParam("id"));
		System.out.println("Here is id = " + eeID);
		User u = us.getUserById(eeID);
		
		List<Requests> listReqs = reqS.getAllRequestsByEEId(eeID);
		ctx.json(listReqs);
		ctx.status(200);
	}
	
	public static void getAllReqByFinanceMngrId(Context ctx) {
		// get {FINMNGRID}
		
		int fmID = Integer.parseInt(ctx.pathParam("id"));
		User u = us.getUserById(fmID);
		
		List<Requests> listReqs = reqS.getAllReqByFinanceMngrId(fmID);
		ctx.json(listReqs);
		ctx.status(200);
	}
	
	
	
	
	// Updates
	public static void updateStatus(Context ctx) {
		//patch
		
		int reqID = Integer.parseInt(ctx.pathParam("reqid"));
		Requests req = ctx.bodyAsClass(Requests.class);
		String statusUpdate = req.getReqStatus();
		
		Requests r = reqS.updateStatus(reqID,statusUpdate);
		ctx.json(r);
		ctx.status(200);
	}
	
	
	
	
	// patch
		public static void patchRequest(Context ctx) {

			//post
			
			int reqID = Integer.parseInt(ctx.pathParam("reqId"));
			Requests req = ctx.bodyAsClass(Requests.class);
			System.out.println(req);
			Requests r = reqS.patchRequest(req);
			ctx.json(r);
			ctx.status(200);
			
		}
		
		
		
		
		
		 
		 public static void patchReqEventTypeOld(Context ctx) {
//				patchUserFirstName(int id, String newFirstName, User u)
				
				
				
				System.out.println("made it to controller");
				Requests incomingReq = ctx.bodyAsClass(Requests.class);
				
				
				inspect(incomingReq.getClass());
				
				
				int id = incomingReq.getReqForID();
				EventModel event = incomingReq.getEvent();
				String type = event.getEventType();
				
//				us.patchUserFirstName(0, null, incomingUser)
				
//				Requests u = us.patchUserReimburesment(id, reimb, incomingReq);
//				Requests u = us.patchUserReimburesment(id, id, null)
				
//				ctx.json(u);
//				ctx.status(200);
				
			}
			
			
		
		public static void patchReqEventType(Context ctx) {
//			patchUserFirstName(int id, String newFirstName, User u)
			
			
			
			System.out.println("made it to controller");
			Requests incomingReq = ctx.bodyAsClass(Requests.class);
			EventModel event = incomingReq.getEvent();
			String eventType = event.getEventType();
			int id = incomingReq.getReqForID();
			
			Requests r = reqS.patchReqEventType(id,eventType,incomingReq);
//			inspect(incomingReq.getClass());
			
			
			
//			String type = event.getEventType();
			
//			us.patchUserFirstName(0, null, incomingUser)
			
//			Requests u = us.patchUserReimburesment(id, reimb, incomingReq);
//			Requests u = us.patchUserReimburesment(id, id, null)
			
			ctx.json(r);
			ctx.status(200);
			
		}
		
		
		

		
		
		// put
		public static void putRequest(Context ctx) {
			//post
			
			int reqID = Integer.parseInt(ctx.pathParam("reqID"));
			Requests req = ctx.bodyAsClass(Requests.class);
			
			Requests r = reqS.putRequest(req);
			ctx.json(r);
			ctx.status(200);
			
		}
	
	// ******************************************************************************88
		
		// Updates
		public static void updateRequestNotes(Context ctx) {
			//patch
			
			int reqID = Integer.parseInt(ctx.pathParam("reqid"));
			Requests req = ctx.bodyAsClass(Requests.class);
			String reqUpdater = req.getNotes();
			
			Requests r = reqS.updateRequestNotes(reqID,reqUpdater,req);
			ctx.json(r);
			ctx.status(200);
		}
		
		public static void updateEventGradingFormat(Context ctx) {
			//patch
			
			int reqID = Integer.parseInt(ctx.pathParam("reqid"));
			Requests req = ctx.bodyAsClass(Requests.class);
			EventModel event = req.getEvent();
			String eventGrading = event.getEventGradingFormat();
			String reqUpdater = eventGrading;
			
			Requests r = reqS.updateEventGradingFormat(reqID,reqUpdater,req);
			ctx.json(r);
			ctx.status(200);
		}

		public static void updateWorkRelatedJustification(Context ctx) {
			//patch
			
			int reqID = Integer.parseInt(ctx.pathParam("reqid"));
			Requests req = ctx.bodyAsClass(Requests.class);
			EventModel event = req.getEvent();
			String eventGrading = event.getWorkRelatedJustification();
			String reqUpdater = eventGrading;
			
			Requests r = reqS.updateWorkRelatedJustification(reqID,reqUpdater,req);
			ctx.json(r);
			ctx.status(200);
		}

		public static void updateEventReimburesmentPerc(Context ctx) {
			//patch
			
			int reqID = Integer.parseInt(ctx.pathParam("reqid"));
			Requests req = ctx.bodyAsClass(Requests.class);
			EventModel event = req.getEvent();
			String eventGrading = event.getEventReimburesmentPerc();
			String reqUpdater = eventGrading;
			
			Requests r = reqS.updateWorkRelatedJustification(reqID,reqUpdater,req);
			ctx.json(r);
			ctx.status(200);
		}

		public static void updateInstructor(Context ctx) {
			//patch
			
			int reqID = Integer.parseInt(ctx.pathParam("reqid"));
			Requests req = ctx.bodyAsClass(Requests.class);
			EventModel event = req.getEvent();
			String eventGrading = event.getInstructor();
			String reqUpdater = eventGrading;
			
			Requests r = reqS.updateInstructor(reqID,reqUpdater,req);
			ctx.json(r);
			ctx.status(200);
		}


		public static void updateAmountToBeReimbursed(Context ctx) {
			//patch
			
			int reqID = Integer.parseInt(ctx.pathParam("reqid"));
			Requests req = ctx.bodyAsClass(Requests.class);
			EventModel event = req.getEvent();
			String eventGrading = event.getInstructor();
			String reqUpdater = eventGrading;
			
			Requests r = reqS.updateAmountToBeReimbursed(reqID,reqUpdater,req);
			ctx.json(r);
			ctx.status(200);
		}

		
		
		
		
		
//******************************************
		
		//WHO KNOWS
		
		
		
		// Updates
		public static void updateRequest(Context ctx) {
			//post
			
			int reqID = Integer.parseInt(ctx.pathParam("reqID"));
			Requests req = ctx.bodyAsClass(Requests.class);
			
			Requests r = reqS.updateRequest(req);
			ctx.json(r);
			ctx.status(200);
			
		}
		
		
		 public static <T> void inspect(Class<T> klazz) {
		        Field[] fields = klazz.getDeclaredFields();
		        System.out.printf("%d fields:%n", fields.length);
		        for (Field field : fields) {
		            System.out.printf("%s %s %s%n",
		                Modifier.toString(field.getModifiers()),
		                field.getType().getSimpleName(),
		                field.getName()
		            );
		        }
		        
		        
		    }
		 
		 public static <T> String inspectDOS(Class<T> klazz) {
		        Field[] fields = klazz.getDeclaredFields();
		        System.out.printf("%d fields:%n", fields.length);
		        for (Field field : fields) {
		        	
//		        	if(field.getName() == req[1][key]) {
//		        		
//		        	}
		        	
		        	if(field.getName()=="reqId") {
		        		
		        		
		        		
		        	}else {
		        		
		        		System.out.printf("%s %s %s%n",
		        				Modifier.toString(field.getModifiers()),
		        				field.getType().getSimpleName(),
		        				field.getName()
		        				
		        				);
		        		String fieldName = field.getName();
		        		String fieldType = field.getType().getSimpleName();
//		        		String newthang = field.;
		        		System.out.println(fieldType);
		        		
		        		return fieldName;
		        	}
		        }
		       return null;
		    }
		
		public static void updateCrazy (Context ctx) {
			//patch
//			int reqID, String reqcolumnToAlter, Requests r
			
			
			int reqID = Integer.parseInt(ctx.pathParam("reqid"));
			Requests r = ctx.bodyAsClass(Requests.class);
			
			Properties props = new Properties();
			
			
//			for(int x = 0; x< r.length(); x++) {
//				
//			}
			String reqcolumnToAlter = inspectDOS(r.getClass());
//			String newValue = r;
//				Requests req = reqS.updateCrazy(reqID, reqcolumnToAlter, r);
				
				ctx.status(200);
//				return req;
			

		}
		
		
		
}
