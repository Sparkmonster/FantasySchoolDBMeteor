if(Meteor.isServer){
	Meteor.methods({
		addProfessors: function(profName, profDept){
			if(!Meteor.userId()){
				throw new Meteor.Error('not authorized');
				return false;
			} else{
				var username = Meteor.user().username;
				var year = new Date().getFullYear();
				var month = new Date().getMonth() + 1;
				var day = new Date().getDate();
				var date = (month + "/" + day + "/" + year).toString();

				Professors.insert({
					profName: profName,
					profDept: profDept,
					createdAt: new Date()
				});
			}
		},

		addCourses: function(courseName, courseNumber, courseSemester, courseDate){
			if(!Meteor.userId()){
				throw new Meteor.Error('not authorized');
				return false;
			} else{
				var username = Meteor.user().username;
				var year = new Date().getFullYear();
				var month = new Date().getMonth() + 1;
				var day = new Date().getDate();
				var date = (month + "/" + day + "/" + year).toString();

				Courses.insert({
					courseName: courseName,
					courseNumber: courseNumber,
					courseSemester: courseSemester,
					courseDate: courseDate,
					createdAt: new Date()
				});
			}
		},

		addSections: function(sectionNumber, sectionRoom, profName, courseName){
			if(!Meteor.userId()){
				throw new Meteor.Error('not authorized');
				return false;
			} else{
				var username = Meteor.user().username;
				var year = new Date().getFullYear();
				var month = new Date().getMonth() + 1;
				var day = new Date().getDate();
				var date = (month + "/" + day + "/" + year).toString();

				Sections.insert({
					sectionNumber: sectionNumber,
					sectionRoom: sectionRoom,
					profName: profName,
					courseName: courseName,
					createdAt: new Date(),
					userId: Meteor.userId()
				});
			}
		},

		removeProfessor: function(professorsId){
			if(!Meteor.userId()){
				throw new Meteor.Error('Not Authorized');
				this.stop();
				return false;
			} else{
				Professors.remove(professorsId);
			}
		},

		removeCourse: function(coursesId){
			if(!Meteor.userId()){
				throw new Meteor.Error('Not Authorized');
				this.stop();
				return false;
			} else{
				Courses.remove(coursesId);
			}
		},

		removeSection: function(sectionsId){
			if(!Meteor.userId()){
				throw new Meteor.Error('Not Authorized');
				this.stop();
				return false;
			} else{
				Sections.remove(sectionsId);
			}
		},
	});
}