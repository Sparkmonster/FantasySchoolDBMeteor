Template.courses.rendered = function(){

}

Template.courses.helpers({
	courses: function(){
		var courses = Courses.find({}, {sort: {createdAt: -1}});
		return courses;
	}
});

Template.courses.events({
	"click #remove-course": function(){
		Meteor.call("removeCourse", this._id);
		Bert.alert("You removed a Course", "success", "growl-top-right");
	}
});