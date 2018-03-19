Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function(){

	//Home
	this.route('home', {
		path: '/home',
		template: 'home'
	});

	//Login
	this.route('login', {
		path: '/',
		template: 'login'
	});

	//Signup
	this.route('signup', {
		path: '/signup',
		template: 'signup'
	});

	//Professors
	this.route('professors', {
		path: '/professors',
		template: 'professors'
	});

	//Courses
	this.route('courses', {
		path: '/courses',
		template: 'courses'
	});

	//Sections
	this.route('sections', {
		path: '/sections',
		template: 'sections'
	});

	this.route('homestar', {
		path: '/homestar',
		template: 'homestar'
	});

	
});