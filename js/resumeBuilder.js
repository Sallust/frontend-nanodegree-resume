var firstName = "Danny";





var skills = ["awesomness","amazingness","JS","HTML","CSS"]

var bio = {
	"name" : "Danny",
	"role" : "Front-End Ninja in Training",
	"contacts" : {
		"mobile" : "240-476-7892",
		"email": "daniyom@gmail.com",
		"github" : "Sallust",
		"twitter" : "@SallustV",
		"location" : "Washington DC"
	},
	"welcome" : "Welcome to the awesomness that is my resume",
	"pictureURL" : "images/me.jpg",
	"skills" : skills
 };

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
			"location":"Washington DC",
			"dates":"Oct 2006-Feb 2007",
			"description":"Provided client research support through database creation and aggregating scientific, industry and regulatory information."
		}
	]
}
for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	$(".work-entry:last").append(formattedEmployer+formattedTitle);

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
			"images":["images/turtle.jpg"]
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
            "city": "Cambridge, MA",
            "degree": "BA",
            "major": "Economics",
            "url":"http://www.harvard.edu/"
        },
        {
            "name": "University of California Berkeley",
            "city": "Berkeley, CA",
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

if (bio.skills) {
	$("#header").append(HTMLskillsStart);
}

$("#skills").append(HTMLskills.replace("%data%",bio.skills.join(" ")));



