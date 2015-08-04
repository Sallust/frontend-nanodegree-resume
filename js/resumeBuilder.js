var firstName = "Danny";

var name = "Danny Haile";
var role = "Front-End Web Developer";

var awesomeThoughts = "I am pretty awesome! How awesome you wonder?";

console.log(awesomeThoughts);

console.log("Mind Blown!");

var email = "daniyom@gmail.com";

//var funThoughts = awesomeThoughts.replace("awesome","fuckin awesome");

var formattedName = HTMLheaderName.replace("%data%",name);

var formattedRole = HTMLheaderRole.replace("%data%",role);

$("#header").prepend(formattedRole);

$("#header").prepend(formattedName);

var skills = ["awesomness","amazingness","JS","HTML","CSS"]

var bio = {
	"name" : "Danny",
	"role" : "Front-End Ninja in Training",
	"contacts" : {
		"mobile" : "240-476-7892",
		"email": email,
		"github" : "Sallust",
		"twitter" : "@SallustV",
		"location" : "Washington DC"
	},
	"welcome" : "Welcome to the awesomness that is my resume",
	"pictureURL" : "images/me.jpg",
	"skills" : skills,



 };

var formattedContact = HTMLcontactGeneric.replace("%contact%",bio.contact);

var formattedWelcome = HTMLwelcomeMsg.replace("%data%",bio.welcome);

var formattedPicture = HTMLbioPic.replace("%data%",bio.pictureURL);

var formattedSkills = HTMLskills.replace("%data%",bio.skills);

$("#header").append(formattedPicture);

$("#topContacts").append(formattedContact);

$("#header").append(formattedWelcome);

$("#header").append(formattedSkills);

$("#main").append(bio.name);

/*
This is empty on purpose! Your code to build the resume will go here.
 */