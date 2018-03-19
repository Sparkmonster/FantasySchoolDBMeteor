Tracker.autorun(function(){
	if(Meteor.userId()){
		Router.go("/home");
	}
});

Template.login.rendered = function(){
	
}

Template.login.events({
	"submit .form-signin": function(event){
		var email = trimInput(event.target.email.value);
		var password = trimInput(event.target.password.value);

		if(isNotEmpty(email) && isNotEmpty(password) && isEmail(email) && isValidPassword(password)){

			Meteor.loginWithPassword(email, password, function(err){   //have meteor check the form for valid login info

				if(err){
					Bert.alert(err.reason, "danger", "growl-top-right");
					return false;
				} else{
					Router.go("/home");   //send user to home page
					Bert.alert("You are now logged in!", "success", "growl-top-right");    //send out alert
				}

			});
		}

		return false; //prevent submit
	}
});

//Trim Helper
var trimInput = function(val){
	return val.replace(/^\s*|\s*$/g, "");
}

var isNotEmpty = function(value){
	if (value && value !== ''){
		return true;
	}
	Bert.alert("Please fill in all fields", "danger", "growl-top-right");
	return false;
}

//Vaildation of Email
isEmail = function(value){
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(filter.test(value)){
		return true;
	}
	Bert.alert("Please use a valid email address", "danger", "growl-top-right");
	return false;
}

//Checking Password Field
isValidPassword = function(password){
	if(password.length <6){
		Bert.alert("Password must be at least 6 characters", "danger", "growl-top-right");
		return false;
	}
	return true;
}