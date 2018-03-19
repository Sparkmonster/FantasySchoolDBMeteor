Template.professors.rendered = function(){

}

Template.professors.helpers({
	professors: function(){
		var professors = Professors.find({}, {sort: {createdAt: -1}});
		return professors;
	}
});

Template.professors.events({
	"click #remove-professor": function(){
		Meteor.call("removeProfessor", this._id);
		Bert.alert("You removed a Professor", "success", "growl-top-right");
	}
});