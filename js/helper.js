var HTMLheaderName = '<div><h1 id="name">%data%</h1></div>';    /*addition of div so elements live vertically*/
var HTMLheaderRole = '<div class="role">%data%</div>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<div class="welcome-message">%data%</div><hr>';

var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';
var HTMLworkPic = '<img src="%data ">'

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img class="project-images" src="%data%">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineClassStart = '<div class="online-entry"></div>'   //Added new Div container for online class elements
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

var internationalizeButton = '<paper-button raised toggles class="name-button">Internationalize</paper-button>';
var googleMap = '<div id="map"></div>';

//Name Button
$(document).ready(function() {
  $('.name-button').click(function() {
    function inName() {
      names = bio.name.split(" ");
      names[1] = names[1].toUpperCase();
      names[0] = names[0][0].toUpperCase() + names[0].slice(1).toLowerCase();
      return names[0] + " " + names[1];
    }
    var iName = inName() || function(){};
    $('#name').html(iName);
  });
});

clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {   //entire page click event listener
});

var map;

function initializeMap() {
  var locations;
  var mapOptions = {
    disableDefaultUI: true
  };
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);

  //creation of new function that also obtains name and date info in an array of arrays
  function mylocationFinder() {
    var mylocations = [];
    var subArray = [];
    subArray.push(bio.contacts.location, 'White House','2005-present') //So pin location for "home" in Washington DC comes up with pic of white House
    mylocations.push(subArray);
    subArray = []
    for (var school in education.schools) {
      subArray.push(education.schools[school].location,education.schools[school].name,education.schools[school].dates);
      mylocations.push(subArray)
      subArray = []
    }
    for (var job in work.jobs) {
      subArray.push(work.jobs[job].location, work.jobs[job].employer, work.jobs[job].dates)
      mylocations.push(subArray);
      subArray = [];
    }
    return mylocations;
  }

  function createMapMarker(placeData) {
    var lat = placeData.geometry.location.lat();
    var lon = placeData.geometry.location.lng();
    var address = placeData.formatted_address;  //formatted address for infoWindow
    var name = placeData.name;                  //Name for infoWindow
    var photoUrl = placeData.photos[0].getUrl({'maxWidth': 65, 'maxHeight': 65});// photoUrl from search results and dimentions
    var bounds = window.mapBounds;            // current boundaries of the map window
    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });
      //function that creates string with infoWindow information dependening on photo existence
    function infoWindowContent(name, address, photoUrl) {
      infoWindowContent = '<div class="info-window"><h5 class="info-title">' + name + '</h5><p class="info-sub">' + address + '</p> </div> '
      if (photoUrl) {
        infoWindowContent = infoWindowContent.slice(0,-7) + '<img src="'+ photoUrl +'">'+ infoWindowContent.slice(-7,-1)
      }
      return infoWindowContent;
    }

    var infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent(name, address, photoUrl),
      maxWidth: 100
    });

    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.open(map, marker);
    });

    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  function pinPoster(locations) {
    var service = new google.maps.places.PlacesService(map);

    for (var place in locations) {
      var request = {
        query: locations[place][0]+ ' ' +locations[place][1] //addition of name data for better search results
      };
      service.textSearch(request, callback);
    }
  }
  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  mylocations = mylocationFinder();
  pinPoster(mylocations);
}

//**REMOVED, added tab specific listener on which to run init
//window.addEventListener('load', initializeMap);

window.addEventListener('resize', function(e) {
  betterTransition();  //to handle the would-be awkward transition when bio div turns into a tab div @500 px width
  map.fitBounds(mapBounds);
});

function betterTransition() {        //Handles when user is looking at bio page and resizes window
  if (pages.selected == 0 && window.innerWidth>500) {
    pages.selected = 1
  }
}
