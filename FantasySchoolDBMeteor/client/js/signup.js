Template.signup.rendered = function(){
	alert("rendered");
}

Template.signup.events({
	"submit .form-signup": function(event){   //function that works for a form with a class called form-signup from signup.html
		var username = trimInput(event.target.username.value);
		var email = trimInput(event.target.email.value);
		var password = trimInput(event.target.password.value);
		var password2 = trimInput(event.target.password2.value);

		if(isNotEmpty(email) && isNotEmpty(username) && isNotEmpty(password) && isEmail(email) && areValidPasswords(password, password2)){  //check variables if empty or not. cant have empty forms. 
			//do things
			Accounts.createUser({   //uses accounts-base package to create a new user
				username: username,
				email: email, 
				password: password,
				profile: {

				}
			}, function(err){

				if(err){
					Bert.alert(err.reason, "danger", "growl-top-right");
				} else{
					Bert.alert("Account Created! You are Now Logged In", "success", "growl-top-right");
					Router.go("/home");
				}

			});

		}

		return false; //prevent submit of form
	}
});

//validation rules

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

//Matching Password
areValidPasswords = function(password, confirm){
	if(!isValidPassword(password)){
		return false;
	}
	if(password !== confirm){
		Bert.alert("Passwords do not match", "danger", "grwol-top-right");
		return false;
	}

	return true;
}