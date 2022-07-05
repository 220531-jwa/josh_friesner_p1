package dev.friesner.repos;

import java.lang.reflect.Field;
import java.lang.reflect.Modifier;
import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Time;
import java.util.ArrayList;
import java.util.List;

import org.apache.logging.log4j.util.PropertiesUtil;
import org.eclipse.jetty.util.ajax.JSON;
import org.eclipse.jetty.util.ajax.JSON.Source;

import dev.friesner.models.EventModel;
import dev.friesner.models.EventTypes;
import dev.friesner.models.GradingFormats;
//import dev.friesner.models.EventTypes;
//import dev.friesner.models.GradingFormats;
import dev.friesner.models.Requests;
import dev.friesner.models.User;
import dev.friesner.utils.ConnectionUtil;


public class RequestDAO {
	
	private static ConnectionUtil cu = ConnectionUtil.getConnectionUtil();
	public static RequestDAO rd = new RequestDAO();
	private static Requests reqOne = new Requests();
	private static EventModel eventOne = new EventModel();
	
	
	
//	public static RequestService reqS= new RequestService();
	public Requests createRequest (Requests r) {
		// post
		String sql = "INSERT INTO requests(req_id,"
				+ "req_for_id,"//1
				+ "reqstatus,"//2
				+ "assignedfinancemngrid,"//4
				+ "requesteddate,"//5
				+ "notes,"//6
				+ "lastupdatedbyid,"
				+ "lastupdateddate,"
				+ "eventname,"
				+ "eventdate,"
				+ "eventtime,"
				+ "eventlocation,"
				+ "eventdescription,"
				+ "eventtotalcost,"
				+ "eventgradingformat,"
				+ "workrelatedjustification,"
				+ "eventtype,"
				+ "eventreimburesmentperc,"
				+ "instructor,"
				+ "amounttobereimbursed"
				+ ") values ("
				+ "default,"
				+ "?,"
				+ "?,"
				+ "?,"
				+ "?,"
				+ "?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
		
//		+ "presentation,"//3
//		+ "certupload,"//3
		
		
		
		try(Connection conn = cu.getConnection()){
			PreparedStatement ps = conn.prepareStatement(sql);
			
			//Request Main
//			int reqId = r.getReqId();
//			ps.setInt(reqId, reqId);
			int reqForID = r.getReqForID();
			String reqStatus = r.getReqStatus();
			int assignedFinanceMngrId = r.getAssignedFinanceMngrId();
			Date requestedDate = (Date) r.getRequestedDate();
//			String requestedDate = (String) r.getRequestedDate();
			String notes = r.getNotes();
//			byte presentation;
//			byte certUpLoad;	
			int lastUpdatedById = r.getLastUpdatedById();
			Date lastupdatedDate = (Date) r.getLastupdatedDate();
			float amounttobereimbursed = r.getAmounttobereimbursed();
			
			ps.setInt(1, reqForID); //int reqForID
			ps.setString(2,reqStatus); //String reqStatus
			ps.setInt(3, assignedFinanceMngrId); //int assignedFinanceMngrId
			ps.setDate(4, requestedDate); //Date requestedDate
			ps.setString(5,notes); //String notes
//			ps.setString(6, null);
//			ps.setString(7, null);
			ps.setInt(6, lastUpdatedById);//int lastUpdatedById
			ps.setDate(7, lastupdatedDate); //Date lastupdatedDate
			
			EventModel event = r.getEvent();
			
			String eventName = event.getEventName();
			Date eventDate = event.getEventDate();
			Time eventTime = event.getEventTime();
			String eventLocation = event.getEventLocation();
			String eventDescription = event.getEventDescription();
			float eventTotalCost = event.getEventTotalCost();
			String eventGradingFormat = event.getEventGradingFormat();
			String workRelatedJustification = event.getWorkRelatedJustification();
			String eventType = event.getEventType();
			String eventReimburesmentPerc = event.getEventReimburesmentPerc();
			String instructor = event.getInstructor();

			ps.setString(8,eventName); //String eventName
			ps.setDate(9, eventDate); // Date eventDate
			ps.setTime(10,eventTime); // String eventTime
			ps.setString(11,eventLocation); // String eventLocation
			ps.setString(12,eventDescription); // String eventDescription
			ps.setFloat(13,eventTotalCost); // float eventTotalCost
			ps.setString(14,eventGradingFormat); // String eventGradingFormat
			ps.setString(15, workRelatedJustification); // String workRelatedJustification
			ps.setString(16,eventType); // String eventType
			ps.setString(17,eventReimburesmentPerc); // String eventReimburesmentPerc
			ps.setString(18,instructor); // String instructor
			
			ps.setFloat(19, amounttobereimbursed);
			
			
			
//			ResultSet rs = ps.executeQuery();
			boolean rs = ps.execute();
			int numberUpdate = ps.getUpdateCount();
//			if(rs == true) {
				
				
//				JSON.parse(rs.toString());
//				EventModel newEM = new EventModel();
//				
//						newEM.setEventName(rs.getString("eventname"));
////						newEM.setEventName(rs.getDate(""));
//						newEM.setEventDate(rs.getDate("eventdate"));
//						newEM.setEventTime(rs.getTime("eventtime"));
//						newEM.setEventLocation(rs.getString("eventlocation"));
//						newEM.setEventDescription(rs.getString("eventdescription"));
//						newEM.setEventTotalCost(rs.getFloat("eventtotalcost"));
//						newEM.setEventGradingFormat(rs.getString("eventgradingformat"));
//						newEM.setWorkRelatedJustification(rs.getString("workrelatedjustification"));
//						newEM.setEventType(rs.getString("eventtype"));
//						newEM.setEventReimburesmentPerc(rs.getString("eventreimburesmentperc"));
//						newEM.setInstructor(rs.getString("instructor"));
//				
//				Requests newReq = new Requests();
//				
//				newReq.setReqId(rs.getInt("req_id"));
//				newReq.setReqForID(rs.getInt("req_for_id"));
//				newReq.setReqStatus(rs.getString("reqstatus"));
//				newReq.setAssignedFinanceMngrId(rs.getInt("assignedfinancemngrid"));
//				newReq.setRequestedDate(rs.getDate("requesteddate"));
//				newReq.setNotes(rs.getString("notes"));
////				newReq.setPresentation;
////				newReq.setCertUpLoad;
//				newReq.setLastUpdatedById(rs.getInt("lastupdatedbyid"));
//				newReq.setLastupdatedDate(rs.getDate("lastupdateddate"));
//				newReq.setEvent(newEM);
//				
//				
//				presentation
//				certupload
				
				return r;
//			}
//			}else {
//				return null;
//			}
//			
			
			
			
		}catch(SQLException e) {
			e.printStackTrace();
		}
		
		
		
		
		
//		Requests newReq = new Requests();
		return null;
	}
	
	public Requests getRequestById (int id) {
		//get {id} in path
		String sql = "Select * from requests where req_id= ?";
		
		try(Connection conn = cu.getConnection()){
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setInt(1, id);
			
			ResultSet rs = ps.executeQuery();
			
			if(rs.next()) {
				
				EventModel newEM = new EventModel();
				
				newEM.setEventName(rs.getString("eventname"));
//				newEM.setEventName(rs.getDate(""));
				newEM.setEventDate(rs.getDate("eventdate"));
				
				
				System.out.println("here is rs " + rs.getDate("eventdate"));
				
				newEM.setEventTime(rs.getTime("eventtime"));
				newEM.setEventLocation(rs.getString("eventlocation"));
				newEM.setEventDescription(rs.getString("eventdescription"));
				newEM.setEventTotalCost(rs.getFloat("eventtotalcost"));
				newEM.setEventGradingFormat(rs.getString("eventgradingformat"));
				newEM.setWorkRelatedJustification(rs.getString("workrelatedjustification"));
				newEM.setEventType(rs.getString("eventtype"));
				newEM.setEventReimburesmentPerc(rs.getString("eventreimburesmentperc"));
				newEM.setInstructor(rs.getString("instructor"));
		
				Requests newReq = new Requests();
		
				newReq.setReqId(rs.getInt("req_id"));
				newReq.setReqForID(rs.getInt("req_for_id"));
				newReq.setReqStatus(rs.getString("reqstatus"));
				newReq.setAssignedFinanceMngrId(rs.getInt("assignedfinancemngrid"));
				newReq.setRequestedDate(rs.getDate("requesteddate"));
				newReq.setNotes(rs.getString("notes"));
		//		newReq.setPresentation;
		//		newReq.setCertUpLoad;
				newReq.setLastUpdatedById(rs.getInt("lastupdatedbyid"));
				newReq.setLastupdatedDate(rs.getDate("lastupdateddate"));
				newReq.setEvent(newEM);
				
				return newReq;
			}
			
			
		}catch(SQLException e) {
			e.printStackTrace();
			
			return null;
		}
		
		return null;
		
//		Requests newReq = new Requests();
//		return newReq;
	}
	
	public List<Requests> getAllRequests () {
		//get
		String sql = "Select * from requests";
		List<Requests> reqLst = new ArrayList<Requests>();
		
		try(Connection conn = cu.getConnection()){
			PreparedStatement ps = conn.prepareStatement(sql);
			ResultSet rs = ps.executeQuery();
			
			while(rs.next()) {
//				Requests wenReq= new Requests();
				EventModel newEM = new EventModel();
				
				newEM.setEventName(rs.getString("eventname"));
//				newEM.setEventName(rs.getDate(""));
				newEM.setEventDate(rs.getDate("eventdate"));
				
				
				System.out.println("here is rs " + rs.getDate("eventdate"));
				
				newEM.setEventTime(rs.getTime("eventtime"));
				newEM.setEventLocation(rs.getString("eventlocation"));
				newEM.setEventDescription(rs.getString("eventdescription"));
				newEM.setEventTotalCost(rs.getFloat("eventtotalcost"));
				newEM.setEventGradingFormat(rs.getString("eventgradingformat"));
				newEM.setWorkRelatedJustification(rs.getString("workrelatedjustification"));
				newEM.setEventType(rs.getString("eventtype"));
				newEM.setEventReimburesmentPerc(rs.getString("eventreimburesmentperc"));
				newEM.setInstructor(rs.getString("instructor"));
		
				Requests newReq = new Requests();
		
				newReq.setReqId(rs.getInt("req_id"));
				newReq.setReqForID(rs.getInt("req_for_id"));
				newReq.setReqStatus(rs.getString("reqstatus"));
				newReq.setAssignedFinanceMngrId(rs.getInt("assignedfinancemngrid"));
				newReq.setRequestedDate(rs.getDate("requesteddate"));
				newReq.setNotes(rs.getString("notes"));
		//		newReq.setPresentation;
		//		newReq.setCertUpLoad;
				newReq.setLastUpdatedById(rs.getInt("lastupdatedbyid"));
				newReq.setLastupdatedDate(rs.getDate("lastupdateddate"));
				newReq.setEvent(newEM);
				
				
				//Future goal
				//loop through rs.
				
				reqLst.add(newReq);
				
				
			}
			
			return reqLst;
			
		}catch(SQLException e) {
			e.printStackTrace();
			
		}
		
		
		
		
		return null;
	}
	
	public  List<Requests> getAllRequestsByEEId (int eeID) {
		// get {EEID}
		String sql = "Select * from requests where req_for_id = ?";
		List<Requests> reqLst = new ArrayList<Requests>();
		try(Connection conn = cu.getConnection()){
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setInt(1, eeID);
			ResultSet rs = ps.executeQuery();
			
			while(rs.next()) {
				
				EventModel newEM = new EventModel();
				
				newEM.setEventName(rs.getString("eventname"));

				newEM.setEventDate(rs.getDate("eventdate"));
				newEM.setEventTime(rs.getTime("eventtime"));
				newEM.setEventLocation(rs.getString("eventlocation"));
				newEM.setEventDescription(rs.getString("eventdescription"));
				newEM.setEventTotalCost(rs.getFloat("eventtotalcost"));
				newEM.setEventGradingFormat(rs.getString("eventgradingformat"));
				newEM.setWorkRelatedJustification(rs.getString("workrelatedjustification"));
				newEM.setEventType(rs.getString("eventtype"));
				newEM.setEventReimburesmentPerc(rs.getString("eventreimburesmentperc"));
				newEM.setInstructor(rs.getString("instructor"));
				
		
				Requests newReq = new Requests();
		
				newReq.setReqId(rs.getInt("req_id"));
				newReq.setReqForID(rs.getInt("req_for_id"));
				newReq.setReqStatus(rs.getString("reqstatus"));
				newReq.setAssignedFinanceMngrId(rs.getInt("assignedfinancemngrid"));
				newReq.setRequestedDate(rs.getDate("requesteddate"));
				newReq.setNotes(rs.getString("notes"));
				newReq.setAmounttobereimbursed(rs.getFloat("amounttobereimbursed"));
		//		newReq.setPresentation;
		//		newReq.setCertUpLoad;
				newReq.setLastUpdatedById(rs.getInt("lastupdatedbyid"));
				newReq.setLastupdatedDate(rs.getDate("lastupdateddate"));
				newReq.setEvent(newEM);
				
				
				//Future goal
				//loop through rs.
				
				reqLst.add(newReq);
			}
			
			return reqLst;
			
		}catch(SQLException e) {
			e.printStackTrace();
		}
//		List<Requests> lstReq = new ArrayList<Requests>();
		
		return null;
	}
	
	public  List<Requests> getAllReqByFinanceMngrId (int fmID) {
		// get {FINMNGRID}
		String sql = "Select * from requests where assignedfinancemngrid = ?";
		List<Requests> reqLst = new ArrayList<Requests>();
		
		try(Connection conn = cu.getConnection()){
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setInt(1, fmID);
			ResultSet rs = ps.executeQuery();
			
			while(rs.next()) {
				
				EventModel newEM = new EventModel();
				
				newEM.setEventName(rs.getString("eventname"));
//				newEM.setEventName(rs.getDate(""));
				newEM.setEventDate(rs.getDate("eventdate"));
				newEM.setEventTime(rs.getTime("eventtime"));
				newEM.setEventLocation(rs.getString("eventlocation"));
				newEM.setEventDescription(rs.getString("eventdescription"));
				newEM.setEventTotalCost(rs.getFloat("eventtotalcost"));
				newEM.setEventGradingFormat(rs.getString("eventgradingformat"));
				newEM.setWorkRelatedJustification(rs.getString("workrelatedjustification"));
				newEM.setEventType(rs.getString("eventtype"));
				newEM.setEventReimburesmentPerc(rs.getString("eventreimburesmentperc"));
				newEM.setInstructor(rs.getString("instructor"));
		
				Requests newReq = new Requests();
		
				newReq.setReqId(rs.getInt("req_id"));
				newReq.setReqForID(rs.getInt("req_for_id"));
				newReq.setReqStatus(rs.getString("reqstatus"));
				newReq.setAssignedFinanceMngrId(rs.getInt("assignedfinancemngrid"));
				newReq.setRequestedDate(rs.getDate("requesteddate"));
				newReq.setNotes(rs.getString("notes"));
		//		newReq.setPresentation;
		//		newReq.setCertUpLoad;
				newReq.setLastUpdatedById(rs.getInt("lastupdatedbyid"));
				newReq.setLastupdatedDate(rs.getDate("lastupdateddate"));
				newReq.setEvent(newEM);
				newReq.setAmounttobereimbursed(rs.getFloat("amounttobereimbursed"));
				
				
				//Future goal
				//loop through rs.
				
				reqLst.add(newReq);
			}
			
			return reqLst;
			
			
		}catch(SQLException e) {
			
		}
		List<Requests> lstReq = new ArrayList<Requests>();
		
		return lstReq;
	}
	
	
	// Updates
		//WORKS
		public Requests updateStatus (int reqID, String reqStatus) {
			//patch
			String sql = "update requests set reqstatus = ? where req_id = ?;";
			try(Connection conn = cu.getConnection()){
				PreparedStatement ps = conn.prepareStatement(sql);
				
				ps.setString(1, reqStatus);
				ps.setInt(2, reqID);
				
				boolean didUpdate = ps.execute();
				
				
				Requests newRequest = rd.getRequestById(reqID);
				
				
				return newRequest;
				
			}catch(SQLException e) {
				e.printStackTrace();
				return null;
			}
//			Requests updatedReq = new Requests();
//			
//			return null;
		}

	
	
	// Updates
		//testing it
	public Requests updateRequest (Requests r) {
		//post
//		String sql = "update requests set ? = ? where id = ?;";
		
//		String sql = "update requests(req_id,"
//				+ "req_for_id,"//1
//				+ "reqstatus,"//2
//				+ "assignedfinancemngrid,"//4
//				+ "requesteddate,"//5
//				+ "notes,"//6
//				+ "lastupdatedbyid,"
//				+ "lastupdateddate,"
//				+ "eventname,"
//				+ "eventdate,"
//				+ "eventtime,"
//				+ "eventlocation,"
//				+ "eventdescription,"
//				+ "eventtotalcost,"
//				+ "eventgradingformat,"
//				+ "workrelatedjustification,"
//				+ "eventtype,"
//				+ "eventreimburesmentperc,"
//				+ "instructor"
//				+ ") values ("
//				+ "default,"
//				+ "?,"
//				+ "?,"
//				+ "?,"
//				+ "?,"
//				+ "?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
		
		System.out.println(r);
		String sql = "update requests SET "
		+ "req_for_id = ?,"//1
		+ "reqstatus = ?,"//2
		+ "assignedfinancemngrid=?,"
		+ "requesteddate=?,"//5
		+ "notes=?,"//6
		+ "lastupdatedbyid=?,"
		+ "lastupdateddate=?,"
		+ "eventname=?,"
		+ "eventdate=?,"
		+ "eventtime=?,"
		+ "eventlocation=?,"
		+ "eventdescription=?,"
		+ "eventtotalcost=?,"
		+ "eventgradingformat=?,"
		+ "workrelatedjustification=?,"
		+ "eventtype=?,"
		+ "eventreimburesmentperc= ?,"
		+ "instructor= ?,"
		+ "amounttobereimbursed = ?"
		+ "where req_id = ?;";
		
		
		try(Connection conn = cu.getConnection()){
			PreparedStatement ps = conn.prepareStatement(sql);
			
			//Request Main
			int reqId = r.getReqId();
//			ps.setInt(reqId, reqId);
			int reqForID = r.getReqForID();
			String reqStatus = r.getReqStatus();
			int assignedFinanceMngrId = r.getAssignedFinanceMngrId();
			Date requestedDate = (Date) r.getRequestedDate();
//			String requestedDate = (String) r.getRequestedDate();
			String notes = r.getNotes();
//			byte presentation;
//			byte certUpLoad;	
			int lastUpdatedById = r.getLastUpdatedById();
			Date lastupdatedDate = (Date) r.getLastupdatedDate();
			float amnttoreimburse = r.getAmounttobereimbursed();
			
			ps.setInt(1, reqForID); //int reqForID
			ps.setString(2,reqStatus); //String reqStatus
			ps.setInt(3, assignedFinanceMngrId); //int assignedFinanceMngrId
			ps.setDate(4, requestedDate); //Date requestedDate
			ps.setString(5,notes); //String notes
//			ps.setString(6, null);
//			ps.setString(7, null);
			ps.setInt(6, lastUpdatedById);//int lastUpdatedById
			ps.setDate(7, lastupdatedDate); //Date lastupdatedDate
			
			
			EventModel event = r.getEvent();
			
			String eventName = event.getEventName();
			Date eventDate = event.getEventDate();
			Time eventTime = event.getEventTime();
			String eventLocation = event.getEventLocation();
			String eventDescription = event.getEventDescription();
			float eventTotalCost = event.getEventTotalCost();
			String eventGradingFormat = event.getEventGradingFormat();
			String workRelatedJustification = event.getWorkRelatedJustification();
			String eventType = event.getEventType();
			String eventReimburesmentPerc = event.getEventReimburesmentPerc();
			String instructor = event.getInstructor();

			ps.setString(8,eventName); //String eventName
			ps.setDate(9, eventDate); // Date eventDate
			ps.setTime(10,eventTime); // String eventTime
			ps.setString(11,eventLocation); // String eventLocation
			ps.setString(12,eventDescription); // String eventDescription
			ps.setFloat(13,eventTotalCost); // float eventTotalCost
			ps.setString(14,eventGradingFormat); // String eventGradingFormat
			ps.setString(15, workRelatedJustification); // String workRelatedJustification
			ps.setString(16,eventType); // String eventType
			ps.setString(17,eventReimburesmentPerc); // String eventReimburesmentPerc
			ps.setString(18,instructor); // String instructor
			
			
			
			ps.setFloat(19, amnttoreimburse);
			ps.setInt(20, reqId);
			
			
			
//			ResultSet rs = ps.executeQuery();
			boolean rs = ps.execute();
			int numberUpdate = ps.getUpdateCount();
			
			
			return r;
//			ps.String(1,colNameAdjusting)
			
			
		}catch(SQLException e) {
			e.printStackTrace();	
		}
		Requests updatedReq = new Requests();
		
		return updatedReq;
	}
	
	


	// patch
	public static Requests patchRequest(Requests r) {
		//post
		
////					int reqID = Integer.parseInt(ctx.pathParam("reqID"));
////					Requests req = ctx.bodyAsClass(Requests.class);
//		public Class<T> getMyType(key) {
////		    return /* some instance of T */.getClass();
//		    return key.getClass();
//		}
		
		
		Requests updatedRequest = new Requests();
		
		return r;
		
	}
	
	
	

	
	// put
	public static Requests putRequest(Requests r) {
	
		
		Requests updatedRequest = new Requests();
		
		return r;
		
	}


	
//	public static Class<T> getMyType() {
//	    return /* some instance of T */.getClass();
//	}
	
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
	
	
	
	
	public Requests updateRequestdos (Requests r, String colNameAdjusting) {
		//post
		String sql = "update requests set ? = ? where id = ?;";
		int reqId = r.getReqId();
		
		
//		 Object var1 = Integer.valueOf("15");
//	        Object var2 = String.valueOf(var1);
		
//		for(int c = 0; c < )
//
//	        if (r[0][key].getClass() == Integer.class) {
//	            System.out.println("var1 is an Integer");
//	        } else if (var1.getClass() == String.class) {
//	            System.out.println("var1 is a String");
//	        } else if (var1.getClass() == Double.class) {
//	            System.out.println("var1 is a Double");
//	        }
		
		
		  
		inspect(r.getClass());
		
		
		
		try(Connection conn = cu.getConnection()){
			
			
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setString(1,colNameAdjusting);
			
			 
			
//			ps.setFloat(2,newValue);
			
			ps.setInt(3,reqId);
			
			
		}catch(SQLException e) {
			
		}
		Requests updatedReq = new Requests();
		
		return updatedReq;
	}
	
	
	
	public Requests patchReqEventReimbursementAmnt(int reqid, String newEventType, Requests req) {
		
		Requests newReq = new Requests();
//		patchUserFirstName(int id, String newFirstName, User u);
//		Requests newReqd
//		User newUser = ud.patchUserReimburesment(id, reimb, u);
		return newReq;
		
	}
	
	
	public Requests patchReqEventType(int reqid, String newEventType, Requests req) {
		
		Requests newReq = new Requests();

		return newReq;
		
	}
	
	
	
	
	
	
	public  Requests updateEventGradingFormat(int reqID, String newGrading, Requests r) {
		//patch
		Requests req = new Requests();
		
		
		return req;
//		int reqID = Integer.parseInt(ctx.pathParam("reqid"));
//		Requests req = ctx.bodyAsClass(Requests.class);
//		EventModel event = req.getEvent();
//		String eventGrading = event.getEventGradingFormat();
//		String reqUpdater = eventGrading;
//		
//		Requests r = reqS.updateStatus(reqID,reqUpdater);
//		ctx.json(r);
//		ctx.status(200);
	}
	
	public  Requests updateRequestNotes(int reqID, String newGrading, Requests r) {
		//patch
		
		Requests req = new Requests();
//		Requests req = rd.updateEventGradingFormat(reqID, newGrading, r);
		
		
		return req;
		

	}
	
	
	
	public  Requests updateWorkRelatedJustification (int reqID, String newGrading, Requests r) {
		//patch
		
		Requests req = new Requests();
//		Requests req = rd.updateEventGradingFormat(reqID, newGrading, r);
		
		
		return req;
		

	}
	
	
	
	
	public  Requests updateEventReimburesmentPerc (int reqID, String newGrading, Requests r) {
		//patch
		
		Requests req = new Requests();
//		Requests req = rd.updateEventGradingFormat(reqID, newGrading, r);
		
		
		return req;
		

	}
	
	
	
	public  Requests updateInstructor (int reqID, String newGrading, Requests r) {
		//patch
		
		Requests req = new Requests();
//		Requests req = rd.updateEventGradingFormat(reqID, newGrading, r);
		
		
		return req;
		

	}
	
	public  Requests updateAmountToBeReimbursed (int reqID, String newGrading, Requests r) {
		//patch
		
		Requests req = new Requests();
//		Requests req = rd.updateEventGradingFormat(reqID, newGrading, r);
		
		
		return req;
		

	}
	
	
	
	
	
//	reqstatus
//	notes
//	eventgradingformat
//	workrelatedjustification
//	eventreimburesmentperc
//	instructor
//	amounttobereimbursed
//	
	
	
	private static int getcoltypes() {
		int newInt = 0;
		
		String newSql ="";
		
		try(Connection conn = cu.getConnection()) {
			 
            // Create statement so that we can execute
            // all of our queries
            // 3. Create a statement object
            Statement statement = conn.createStatement();

            // Query to retrieve records
            String query
                = "Select * from requests";

            // 4. Executing the query
            ResultSet resultSet
                = statement.executeQuery(query);

            // 5. Get the ResultSetMetaData object
            ResultSetMetaData resultSetMetaData
                = resultSet.getMetaData();

            for (int i = 1; i <= resultSetMetaData.getColumnCount(); i++) {
                System.out.println(
                    "ColumnName = "
                    + resultSetMetaData.getColumnName(
                          i));
                System.out.println(
                    "ColumnType = "
                    + resultSetMetaData.getColumnType(i)
                    + "   ");
                System.out.println(
                    "ColumnLabel = "
                    + resultSetMetaData.getColumnLabel(
                          i)
                    + "   ");
                System.out.println(
                    "ColumnDisplaySize = "
                    + resultSetMetaData
                          .getColumnDisplaySize(i)
                    + "   ");
                System.out.println(
                    "ColumnTypeName = "
                    + resultSetMetaData
                          .getColumnTypeName(i)
                    + "   ");
                System.out.println(
                    "------------------");
            }
        }catch (SQLException s) {
            System.out.println(
                "SQL statement is not executed!");
        }
		
		
		return newInt;
    }

    // in case of general exceptions
    // other than SQLException
//    catch (Exception e) {
//        e.printStackTrace();
//    }
//    finally {
//        // After completing the operations, we
//        // need to null resultSet and connection
//        resultSet = null;
//        con = null;
//    }
//}
//		
		
//	};
	
	
	public Requests updateCrazy (int reqID, String reqcolumnToAlter, Requests r) {
		//patch
		String sql = "update requests set ? = ? where req_id = ?;";
		try(Connection conn = cu.getConnection()){
			PreparedStatement ps = conn.prepareStatement(sql);
			
			ps.setString(1, reqcolumnToAlter);
			
			
			//*******************************
			
			int newInt = getcoltypes();
			
			
			
			
			
			//*******************************
			
			ps.setInt(3, reqID);
			
			boolean didUpdate = ps.execute();
			
			
			Requests newRequest = rd.getRequestById(reqID);
			
			
			return newRequest;
			
		}catch(SQLException e) {
			e.printStackTrace();
			return null;
		}
//		Requests updatedReq = new Requests();
//		
//		return null;
	}


	
	
	
	


}
