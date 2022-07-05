package dev.friesner.models;

public enum RolesEnum {
	Associate("Associate"),
	FINANCEMANAGER("Finance Manager");
	
	
	private final String roleName;

	RolesEnum(String roleName) {
		this.roleName = roleName;
		// TODO Auto-generated constructor stub
	}

	
	public String getRoleName() {
		return roleName;
	}
	
	
	private RolesEnum type;

//	public Rle(String role) {
//		this();
//		this.role = role;
//	};
	
	public RolesEnum getType() {
		return type;
	}
	
	public void setType(RolesEnum type) {
		this.type = type;
	}
	
}
