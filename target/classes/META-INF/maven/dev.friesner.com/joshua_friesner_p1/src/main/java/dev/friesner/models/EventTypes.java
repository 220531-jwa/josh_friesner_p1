package dev.friesner.models;

public enum EventTypes {
	UNIVERSITYCOURSES("University Courses"),
	SEMINARS("Seminars"),
	CERTIFICATIONPREPCLASSES("Certification Preparation Classes"),
	CERTIFICATION("Certification"),
	TECHNICALTRAINING("Technical Training"),
	OTHER("Other");
	
	
	private final String typeName;

	EventTypes(String typeName) {
		this.typeName = typeName;
	}
	
	
	public String getEventType() {
		return typeName;
	}
	
	
	private EventTypes type;
	
	public void setType(EventTypes type) {
		this.type = type;
	}
	
	 
}
