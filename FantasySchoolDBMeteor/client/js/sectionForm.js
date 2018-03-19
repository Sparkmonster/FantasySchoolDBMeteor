Template.sectionForm.rendered = function(){

}

Template.sectionForm.events({
	"submit .section-post": function(){
		var sectionNumber = $(event.target).children("#sectionNumber").val();
		var sectionRoom = $(event.target).children("#sectionRoom").val();
		var profName = $(event.target).children("#profName").val();
		var courseName = $(event.target).children("#courseName").val();

		if(isNotEmpty(sectionNumber) && isNotEmpty(sectionRoom) && isNotEmpty(profName) && isNotEmpty(courseName)){

			Meteor.call('addSections', sectionNumber, sectionRoom, profName, courseName);


			Bert.alert("You posted a course section.", "success", "growl-top-right");


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