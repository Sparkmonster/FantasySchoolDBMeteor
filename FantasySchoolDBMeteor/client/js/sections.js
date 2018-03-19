Template.sections.rendered = function(){

}

Template.sections.helpers({
	sections: function(){
		var sections = Sections.find({}, {sort: {createdAt: -1}});
		return sections;
	}
});

Template.sections.events({
	"click #remove-section": function(){
		Meteor.call("removeSection", this._id);
		Bert.alert("You removed a Section", "success", "growl-top-right");
	}
});