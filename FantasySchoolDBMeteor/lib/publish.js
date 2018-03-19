if(Meteor.isServer){
	Meteor.publish('Professors', function(){
		if(!this.userId){
			return false;
			throw new Meteor.Error('Not Authorized');
		} else {
			return Professors.find();
		}
	});

	Meteor.publish('Courses', function(){
		if(!this.userId){
			return false;
			throw new Meteor.Error('Not Authorized');
		} else {
			return Courses.find();
		}
	});

	Meteor.publish('Sections', function(){
		if(!this.userId){
			return false;
			throw new Meteor.Error('Not Authorized');
		} else {
			return Sections.find();
		}
	});
}