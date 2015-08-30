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
	"welcome" : '"Welcome to the awesomness that is my resume"',
	"pictureURL" : "images/me.jpg",
	"skills" : ["awesomness","amazingness","JS","HTML","CSS"]
 }

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
			"employer":"Banana Republic",
			"title":"Merchandising Manager",
			"location":"Chevy Chase, MD",
			"dates":"Feb 2008-Oct 2009",
			"description": "Provided client research support through database creation and aggregating scientific, industry and regulatory information."
		},
		{
			"employer":"Becker Consulting",
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
}

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
}

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedPicture = HTMLbioPic.replace("%data%",bio.pictureURL);
	var formattedWelcome = HTMLwelcomeMsg.replace("%data%",bio.welcome);

	for (contact in bio.contacts) {
		window['formatted' + capital(contact)] = HTMLcontactGeneric.replace("%contact%",contact).replace("%data%",bio.contacts[contact]);
	}  //Creation of formattedContact variables using HTMLcontactGeneric

	$("#toolbar-header").prepend(formattedName,formattedRole);
	$(".bio-page").prepend(formattedPicture,formattedWelcome);

	$(".topContacts").append(formattedMobile,formattedEmail,formattedGithub);
	$("#footerContacts").append(formattedMobile,formattedTwitter)

	if (bio.skills) {
		$(".topContacts").after(HTMLskillsStart);
	}
	for (skill in bio.skills) {
		var formattedSkill = HTMLskills.replace("%data%",bio.skills[skill])
		$("#skills").prepend(formattedSkill)
	}
}

work.display = function() {
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
		$(".project-entry:last").append(formattedTitle,formattedDate,formattedDescription,formattedImages);
	}
}

education.display = function() {

	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedSchool = HTMLschoolName.replace("%data%",education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].major);
		$(".education-entry:last").append(formattedSchool,formattedDegree,formattedDates,formattedLocation,formattedMajor)
	}
	$("#education").append(HTMLonlineClasses);
	for (course in education.onlineCourses) {
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

