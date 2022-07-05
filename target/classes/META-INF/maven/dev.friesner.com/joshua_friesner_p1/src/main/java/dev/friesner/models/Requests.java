package dev.friesner.models;

import java.lang.invoke.*;
import java.lang.reflect.Field;
import java.io.File;
import java.sql.Date;
import java.sql.Time;

import io.cucumber.gherkin.internal.com.eclipsesource.json.Json;

public class Requests {
	
//	private static EventModel EM = new EventModel();
	
	private int reqId;
	private int reqForID;
	private String reqStatus;
	private int assignedFinanceMngrId;
	private Date requestedDate;
	private String notes;
	private byte presentation;
	private byte certUpLoad;
	private int lastUpdatedById;
	private Date lastupdatedDate;
	private EventModel event;
	private float amounttobereimbursed; 

	public Requests() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	

	public float getAmounttobereimbursed() {
		return amounttobereimbursed;
	}




	public void setAmounttobereimbursed(float amounttobereimbursed) {
		this.amounttobereimbursed = amounttobereimbursed;
	}




	public int getReqForID() {
		return reqForID;
	}




	public void setReqForID(int reqForID) {
		this.reqForID = reqForID;
	}

	


	public Date getLastupdatedDate() {
		

		return lastupdatedDate;
	}




	public void setLastupdatedDate(Date lastupdatedDate) {
		this.lastupdatedDate = lastupdatedDate;
	}




	public Requests(int reqId, int reqForID, String reqStatus, int assignedFinanceMngrId, Date requestedDate,
			int lastUpdatedById, String notes, byte presentation, byte certUpLoad, EventModel event) {
		super();
		this.reqId = reqId;
		this.reqForID = reqForID;
		this.reqStatus = reqStatus;
		this.assignedFinanceMngrId = assignedFinanceMngrId;
		this.requestedDate = requestedDate;
		this.lastUpdatedById = lastUpdatedById;
		this.notes = notes;
		this.presentation = presentation;
		this.certUpLoad = certUpLoad;
		this.event = event;
	}

	public int getReqId() {
		return reqId;
	}
	
	public void setReqId(int reqId) {
		this.reqId = reqId;
	}
	
	

	public String getReqStatus() {
		return reqStatus;
	}

	public void setReqStatus(String reqStatus) {
		this.reqStatus = reqStatus;
	}

	public int getAssignedFinanceMngrId() {
		return assignedFinanceMngrId;
	}

	public void setAssignedFinanceMngrId(int assignedFinanceMngrId) {
		this.assignedFinanceMngrId = assignedFinanceMngrId;
	}

	public Date getRequestedDate() {
		
//		Date rd = requestedDate.);
		
//		
//		Long newRd = Long.parseLong(rd.toString());
//		Date dated = new Date(newRd);
//		Json.
		
		return requestedDate;
	}

	public void setRequestedDate(Date requestedDate) {
		this.requestedDate = requestedDate;
	}

	public int getLastUpdatedById() {
		return lastUpdatedById;
	}

	public void setLastUpdatedById(int lastUpdatedById) {
		this.lastUpdatedById = lastUpdatedById;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}

	public byte getPresentation() {
		return presentation;
	}

	public void setPresentation(byte presentation) {
		this.presentation = presentation;
	}

	public byte getCertUpLoad() {
		return certUpLoad;
	}

	public void setCertUpLoad(byte certUpLoad) {
		this.certUpLoad = certUpLoad;
	}

	public EventModel getEvent() {
		return event;
	}

	public void setEvent(EventModel event) {
		this.event = event;
	}




	@Override
	public String toString() {
		return "Requests [reqId=" + reqId + ", reqForID=" + reqForID + ", reqStatus=" + reqStatus
				+ ", assignedFinanceMngrId=" + assignedFinanceMngrId + ", requestedDate=" + requestedDate + ", notes="
				+ notes + ", presentation=" + presentation + ", certUpLoad=" + certUpLoad + ", lastUpdatedById="
				+ lastUpdatedById + ", lastupdatedDate=" + lastupdatedDate + ", event=" + event + "]";
	}




//	private static String[] getDeclaredFields() {
//		
////		Field myField = new Field();
//		String[] myFields ={"reqId",
//		"reqForID",
//		"reqStatus",
//		"assignedFinanceMngrId",
//		"requestedDate",
//		"notes",
//		"presentation",
//		"certUpLoad",
//		"lastUpdatedById",
//		"lastupdatedDate",
//		"event",
//		"amounttobereimbursed"};
//		
//		
//		return myFields;
//		
//	}

	
	
	
	
	
//	All Employees must complete the Tuition Reimbursement form one week prior to the start of the event.  
	// This form must collect (required): basic employee information; date, time, location, 
	
	
	
	
	
	
	
	
}
