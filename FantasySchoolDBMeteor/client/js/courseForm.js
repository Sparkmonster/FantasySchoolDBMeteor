Template.courseForm.rendered = function(){

}

Template.courseForm.events({
	"submit .course-post": function(){
		
		var courseName = $(event.target).children("#courseName").val();
		var courseNumber = $(event.target).children("#courseNumber").val();
		var courseSemester = $(event.target).children("#courseSemester").val();
		var courseDate = $(event.target).children("#courseDate").val();

		if(isNotEmpty(courseName) && isNotEmpty(courseNumber) && isNotEmpty(courseSemester) && isNotEmpty(courseDate)){

			Meteor.call('addCourses', courseName, courseNumber, courseSemester, courseDate);


			Bert.alert("You posted a course.", "success", "growl-top-right");


		} else{
			Bert.alert("Something went wrong.", "danger", "growl-top-right");
		}

		return false; //prevent form submit
	}
});

//Validation Rules

var isNotEmpty = function(value){
	if (value && value !== ''){
		return true;
	}
	Bert.alert("Please fill in all fields", "danger", "growl-top-right");
	return false;
}