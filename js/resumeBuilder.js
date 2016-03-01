var bio = {
	"name" : "Danny Haile",
	"role" : "Front-End Ninja in Training",
	"contacts" : {
		"mobile" : "240-476-7892",
		"email": "daniyom@gmail.com",
		"github" : "Sallust",
		"twitter" : "@SallustV",
		"location" : "Washington, DC"
	},
	"welcome" : '"Welcome to the awesomeness that is my resume"',
	"pictureURL" : "images/me.jpg",
	"skills" : ["awesomeness","amazingness","JS","HTML","CSS"]
};

var work = {
	"jobs": [
		{
			"employer":"J.Crew",
			"title":"Merchandising Manager",
			"location":"Bethesda, MD",
			"dates":"Dec 2010-May2014",
			"description":"•	Increased annual store sales from $5.1 to $5.9 over 3 years through customer-focused service behavior, client outreach and staff talent development.•	Identified and developed talent: •	Analyzed product sales data for trends and losses as to maximize real estate and react to underperformers and sell-through.•	Compiled insightful product feedback incorporating both sales data and individual customer reactions.•	Executed 3 successful new store openings as part of a team of merchants and logistics partners."
		},
		{
			"employer":"Banana Republic",
			"title":"Merchandising Manager",
			"location":"Chevy Chase, MD",
			"dates":"Feb 2008-Oct 2009",
			"description": "Provided client research support through database creation and aggregating scientific, industry and regulatory information."
		},
		{
			"employer":"Becker & Associates Consulting Inc",
			"title":"Research Associate",
			"location":"M St. Washington, DC",
			"dates":"Oct 2006-Feb 2007",
			"description": "Provided client research support through database creation and aggregating scientific, industry and regulatory information."
		},
		{
			"employer":"Wells Fargo",
			"title":"Intern",
			"location":"San Francisco, CA",
			"dates":"Summer 2004",
			"description": " Underwrote equity-equivalent investments to qualifying non-profit agencies with assets up to $40 million."
		}
	]
};

var projects = {
	"project": [
		{
			"title":"Online Portfolio",
			"dates":"July 2015",
			"description": "Online Portfolio using HTML & CSS",
			"images":["images/Washington-800-1x.jpg"]
		},
		{
			"title":"Python Turtles",
			"dates":"June 2015",
			"description":"Using Python classes to create a visualization",
			"images":["images/turtles.jpg"]
		},
		{
			"title":"Movie Website",
			"dates":"June 2015",
			"description":"Using Python classes to create a movie website showcasing my favorite movies",
			"images":["images/movies.jpg"]
		}
	]
};

var education = {
	"schools": [
		{
			"name": "Harvard University",
			"location": "Cambridge, MA",
			"degree": "BA",
			"dates": "2000-2005",
			"major": "Economics",
			"url":"http://www.harvard.edu/"
		},
		{
			"name": "University of California Berkeley",
			"location": "Berkeley, CA",
			"degree": "coursework",
			"dates": "Summer 2004",
			"major": "Accounting",
			"url":"http://www.berkeley.edu/"
		}
	],
	"onlineCourses":[
		{
			"title":"JavaScript",
			"school":"Udacity",
			"dates":"Summer 2015",
			"url":"https://www.udacity.com/course/javascript-basics--ud804"
		},
		{
			"title":"Intro to HTML & CSS",
			"school":"Udacity",
			"dates":"Summer 2015",
			"url":"https://www.udacity.com/course/intro-to-html-and-css--ud304"
		},
		{
			"title":"Programming Foundations with Python",
			"school":"Udacity",
			"dates":"Summer 2015",
			"url":"https://www.udacity.com/course/programming-foundations-with-python--ud036"
		}
	]
};

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedPicture = HTMLbioPic.replace("%data%",bio.pictureURL);
	var formattedWelcome = HTMLwelcomeMsg.replace("%data%",bio.welcome);

	function capital (str) {        //for consistent variable naming in next few lines
		return str[0].toUpperCase()+str.substr(1);
	}

	for (var contact in bio.contacts) {
		window['formatted' + capital(contact)] = HTMLcontactGeneric.replace("%contact%",contact).replace("%data%",bio.contacts[contact]);
	}  //Creation of formattedContact variables using HTMLcontactGeneric

	$("#toolbar-header").prepend(formattedName,formattedRole);
	$(".bio-page").prepend(formattedPicture,formattedWelcome);

	$(".topContacts").append(formattedMobile,formattedEmail,formattedGithub);
	$("#footerContacts").append(formattedEmail,formattedMobile,formattedTwitter)

	if (bio.skills.length > 0) {
		$(".topContacts").after(HTMLskillsStart);
	}
	for (var skill in bio.skills) {
		var formattedSkill = HTMLskills.replace("%data%",bio.skills[skill])
		$("#skills").prepend(formattedSkill)
	}
}

work.display = function() {
	for (var job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedEmployer+formattedTitle+formattedDate+formattedLocation+formattedworkDescription);
	}
}

projects.display = function() {
	for (var project in projects.project) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[project].title);
		var formattedDate = HTMLprojectDates.replace("%data%", projects.project[project].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[project].description);
		var formattedImages = ""
		for (image in projects.project[project].images) {
			var formattedImage = HTMLprojectImage.replace("%data%", projects.project[project].images[image]);
			formattedImages = formattedImages + formattedImage;
		}
		$(".project-entry:last").append(formattedTitle,formattedDate,formattedDescription,formattedImages);
	}
}

education.display = function() {
	for (var school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedSchool = HTMLschoolName.replace("%data%",education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].major);
		$(".education-entry:last").append(formattedSchool+formattedDegree+formattedDates+formattedLocation+formattedMajor)
	}
	$("#education").append(HTMLonlineClasses);
	for (var course in education.onlineCourses) {
		$("#education").append(HTMLonlineClassStart)
		var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
		var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
		var formattedURL = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
		$(".online-entry:last").append(formattedTitle+formattedSchool+formattedDates+formattedURL);
	}
}

bio.display();
work.display();
projects.display();
education.display();

$(document).click(function(loc) {
	logClicks(loc.pageX, loc.pageY);
});

$("#mid-header").append(internationalizeButton)
$("#mapDiv").append(googleMap);
