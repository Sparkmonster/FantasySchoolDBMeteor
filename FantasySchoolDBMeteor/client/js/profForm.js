Template.profForm.rendered = function(){

}

Template.profForm.events({
	"submit .professor-post": function(){

		var profName = $(event.target).children("#profName").val();
		var profDept = $(event.target).children("#profDept").val();

		if(isNotEmpty(profName) && isNotEmpty(profDept)){

			Meteor.call('addProfessors', profName, profDept);

			Bert.alert("You posted a professor.", "success", "growl-top-right");


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