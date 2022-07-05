package dev.friesner.models;

import java.sql.Date;
import java.sql.Time;

public class EventModel{
	
	
	//Event info
	
	private String eventName;
	private Date eventDate;
	private Time eventTime;
	private String eventLocation;
	private String eventDescription;
	private float eventTotalCost;
	private GradingFormats eventGradingFormat;
	private String workRelatedJustification;
	private EventTypes eventType;
	private String eventReimburesmentPerc;
	private String instructor;
	
	
	public EventModel() {
		super();
		// 
	}


	

	public EventModel(String eventName, Date eventDate, Time eventTime, String eventLocation, String eventDescription,
			float eventTotalCost, GradingFormats eventGradingFormat, String workRelatedJustification,
			EventTypes eventType, String eventReimburesmentPerc, String instructor) {
		super();
		this.eventName = eventName;
		this.eventDate = eventDate;
		this.eventTime = eventTime;
		this.eventLocation = eventLocation;
		this.eventDescription = eventDescription;
		this.eventTotalCost = eventTotalCost;
		this.eventGradingFormat = eventGradingFormat;
		this.workRelatedJustification = workRelatedJustification;
		this.eventType = eventType;
		this.eventReimburesmentPerc = eventReimburesmentPerc;
		this.instructor = instructor;
	}




	public String getEventName() {
		return eventName;
	}


	public void setEventName(String eventName) {
		this.eventName = eventName;
	}


	public Date getEventDate() {
			Date ans = eventDate;
		return ans;
	}


	public void setEventDate(Date eventDate) {
		this.eventDate = eventDate;
	}


	public Time getEventTime() {
		return eventTime;
	}


	public void setEventTime(Time eventTime) {
		this.eventTime = eventTime;
	}


	public String getEventLocation() {
		return eventLocation;
	}


	public void setEventLocation(String eventLocation) {
		this.eventLocation = eventLocation;
	}


	public String getEventDescription() {
		return eventDescription;
	}


	public void setEventDescription(String eventDescription) {
		this.eventDescription = eventDescription;
	}


	public float getEventTotalCost() {
		return eventTotalCost;
	}


	public void setEventTotalCost(float eventTotalCost) {
		this.eventTotalCost = eventTotalCost;
	}



	
	public String getEventGradingFormat() {
		return this.eventGradingFormat.name();
	}


	public void setEventGradingFormat(String eventGradingFormat) {
		
		this.eventGradingFormat = GradingFormats.valueOf(eventGradingFormat);
	}
	
	
	
	
	public String getWorkRelatedJustification() {
		return workRelatedJustification;
	}


	public void setWorkRelatedJustification(String workRelatedJustification) {
		this.workRelatedJustification = workRelatedJustification;
	}
	
	
	



	public String getInstructor() {
		return instructor;
	}


	public void setInstructor(String instructor) {
		this.instructor = instructor;
	}


	




	public void setEventType(String eventType) {
		// TODO Auto-generated method stub
		this.eventType = EventTypes.valueOf(eventType);
		
	}
	
	public String getEventType() {
		
		String typer = this.eventType.name();
		
		getEventPercentageAmnt(typer);
		
		return typer;
		
	}
	
	
	private static String getEventPercentageAmnt(String perc) {
		
		String s = new String();
		System.out.println(perc.toString());
		
//		switch (perc) {
//        case 1:  perc = "January";
//                 break;
//        case 2:  perc = "February";
//                 break;
//        case 3:  perc = "March";
//                 break;
//        case 4:  monthString = "April";
//                 break;
//        case 5:  monthString = "May";
//                 break;
//        case 6:  monthString = "June";
//                 break;
//        case 7:  monthString = "July";
//                 break;
//        case 8:  monthString = "August";
//                 break;
//        case 9:  monthString = "September";
//                 break;
//        case 10: monthString = "October";
//                 break;
//        case 11: monthString = "November";
//                 break;
//        case 12: monthString = "December";
//                 break;
//        default: monthString = "Invalid month";
//                 break;
//    }
//		
//		
//		case(perc)
		
		return s;
		
	}
	
	
	
	public String getEventReimburesmentPerc() {
		return eventReimburesmentPerc;
	}


	public void setEventReimburesmentPerc(String eventReimburesmentPerc) {
		this.eventReimburesmentPerc = eventReimburesmentPerc;
	}

	
	
	
	@Override
	public String toString() {
		return "EventModel [eventName=" + eventName + ", eventDate=" + eventDate + ", eventTime=" + eventTime
				+ ", eventLocation=" + eventLocation + ", eventDescription=" + eventDescription + ", eventTotalCost="
				+ eventTotalCost + ", eventGradingFormat=" + eventGradingFormat + ", workRelatedJustification="
				+ workRelatedJustification + ", eventType=" + eventType + ", eventReimburesmentPerc="
				+ eventReimburesmentPerc + ", instructor=" + instructor + "]";
	}

	
	
	
	
//	private String 
	
	
	
	
//	"University Courses" 80%, 
//	"Seminars" 60%, 
//	"Certification Preparation Classes" 75%, 
//	"Certification" 100%, 
//	"Technical Training" 90%, 
//	"Other" 30%. 
}
