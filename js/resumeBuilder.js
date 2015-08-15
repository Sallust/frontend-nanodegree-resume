


//var skills = ["awesomness","amazingness","JS","HTML","CSS"]

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
	"welcome" : "Welcome to the awesomness that is my resume",
	"pictureURL" : "images/me.jpg",
	"skills" : ["awesomness","amazingness","JS","HTML","CSS"]
 };






bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedPicture = HTMLbioPic.replace("%data%",bio.pictureURL);
	var formattedWelcome = HTMLwelcomeMsg.replace("%data%",bio.welcome);

	for (contact in bio.contacts) {
		window['formatted' + capital(contact)] = HTMLcontactGeneric.replace("%contact%",contact).replace("%data%",bio.contacts[contact]);
	}
	$("#header").prepend(formattedName,formattedRole);



	$("#header").append(formattedPicture);

	$("#topContacts").append(formattedMobile,formattedEmail,formattedGithub);

	$("#header").append(formattedWelcome);



	if (bio.skills) {
		$("#header").append(HTMLskillsStart);
	}
	for (skill in bio.skills) {
		var formattedSkill = HTMLskills.replace("%data%",bio.skills[skill])
		$("#skills").prepend(formattedSkill)
	}



}

bio.display();

var work = {
	"jobs": [
		{
			"employer":"J.Crew",
			"title":"Merchandising Manager",
			"location":"Bethesda, MD",
			"dates":"Dec 2010-May2014",
			"description":"Made the store amazing using my intrinsic awesomeness"
		},
		{
			"employer":"Becker Consulting",
			"title":"Research Associate",
			"location":"Washington, DC",
			"dates":"Oct 2006-Feb 2007",
			"description":"Provided client research support through database creation and aggregating scientific, industry and regulatory information."
		}
	]
}
var displayWork = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		$(".work-entry:last").append(formattedEmployer+formattedTitle+formattedDate+formattedLocation+formattedworkDescription);
	}
}

displayWork();

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
}

projects.display = function() {
	for (project in projects.project) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[project].title);
		var formattedDate = HTMLprojectDates.replace("%data%", projects.project[project].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[project].description);
		var formattedImages = ""
		for (image in projects.project[project].images) {
			var formattedImage = HTMLprojectImage.replace("%data%", projects.project[project].images[image]);
			formattedImages = formattedImages + formattedImage;
		}
		$(".project-entry:last").append(formattedTitle+formattedDate+formattedDescription+formattedImages);

	}

}
projects.display();


var education = {
    "schools": [
        {
            "name": "Harvard University",
            "location": "Cambridge, MA",
            "degree": "BA",
            "major": "Economics",
            "url":"http://www.harvard.edu/"
        },
        {
            "name": "University of California Berkeley",
            "location": "Berkeley, CA",
            "degree": "coursework",
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
}





$(document).click(function(loc) {
	logClicks(loc.pageX, loc.pageY);

});

$("#main").append(internationalizeButton)

function inName() {
	names = name.split(" ");


    names[1] = names[1].toUpperCase();
    names[0] = names[0][0].toUpperCase() + names[0].slice(1).toLowerCase();



	return names[0] + " " + names[1]

}

$("#mapDiv").append(googleMap)

function capital (str) {
	return str[0].toUpperCase()+str.substr(1);
}