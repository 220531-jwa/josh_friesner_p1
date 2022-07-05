package dev.friesner.models;

public enum RequestStatuses {
	PENDING("Pending"),
	PENDINGAINFE("Pending -AINFE-"),//-Additional Information Needed From Employee -
	CONFIRMEDPENDING("Confirmed Pending"),// this means that the finance manager has confirmed it and waiting for course completion.
	CONFIRMEDPEAF("Confirmed PEAF"),// This means that the finance manager has confirmed it and waiting for course completion and it is exceeding available funds.
	CONFIRMED("Confirmed"), // This means it is confirmed and everything is done.
	//exceeding available funds
	CONFIRMEDEAF("Confirmed EAF"),// This means it is confirmed and everything is done, and there is exceeding available funds.
	DENIED("Denied"); // Yo, no course for you! 
	
	
	private final String statusName;

	RequestStatuses(String statusName) {
		this.statusName = statusName;
		// TODO Auto-generated constructor stub
	}

	
	public String getRoleName() {
		return statusName;
	}
	
	
	private RequestStatuses type;

//	public Rle(String role) {
//		this();
//		this.role = role;
//	};
	
	public RequestStatuses getType() {
		return type;
	}
	
	public void setType(RequestStatuses type) {
		this.type = type;
	}
	
}
