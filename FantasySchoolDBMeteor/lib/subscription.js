if(Meteor.isClient){
	Meteor.subscribe('Professors');
	Meteor.subscribe('Courses');
	Meteor.subscribe('Sections');
}