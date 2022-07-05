package dev.friesner.models;

public enum GradingFormats {

		PERCENTGRADING("Percentage Grading"),
		LETTERGRADING("Letter grading"),
		NORMREFERENCEDGRADING("Norm-referenced grading"),
		MASTERYGRADNG("Mastery grading"),
		PASSFAIL("Pass/Fail"),
		STANDARDS("Standards grading"),
		NARRATIVE("Narrative grading");
	
	private final String gradeFormat;

	GradingFormats(String gradeFormat) {
		this.gradeFormat = gradeFormat;
		// TODO Auto-generated constructor stub
	}

	
	public String getGradeFormat() {
		return gradeFormat;
	}
	
	
	private GradingFormats type;

//	public Rle(String role) {
//		this();
//		this.role = role;
//	};
	
	public GradingFormats getType() {
		return type;
	}
	
	public void setType(GradingFormats type) {
		this.type = type;
	}
	
		
//		Percentage Grading – From 0 to 100 Percent
//		Letter grading and variations – From A Grade to F Grade
//		Norm-referenced grading – Comparing students to each other usually letter grades
//		Mastery grading – Grading students as “masters” or “passers” when their attainment reaches a prespecified level
//		Pass/Fail – Using the Common Scale as Pass/Fail
//		Standards grading (or Absolute-Standards grading) – Comparing student performance to a pre-established standard (level) of performance
//		Narrative grading -Writing Comments about students
}
