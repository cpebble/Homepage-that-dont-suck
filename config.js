var config ={ //This is the site configuration
		"name" : "Christian Påbøl",
		"title": "Awesome homepage belonging to %name",
		"sites":	[
			{"title" : "Google",		"url" : "http://www.google.com/"},
			{"title" : "Reddit",		"url" : "http://www.reddit.com/"},
			{"title" : "Facebook",		"url" : "http://www.facebook.com/"},
			{"title" : "Lectio", 		"url" : "https://www.lectio.dk/lectio/681/forside.aspx"},
			{"title" : "Commitstrip",	"url" : "http://www.commitstrip.com/"},
			{"title" : "xkcd",			"url" : "http://www.xkcd.com/"},
			{"title" : "gridTest", 		"url" : "grid.html"}
		],
		"configUpdate" : 1
	};

//First we set the header with variables
var heading = config.title;
heading = heading.replace(/%name/g , "<span class='name'>"+config.name+"</span>");
console.log(heading);
document.getElementById("title").innerHTML = heading;

var sitesDiv = $("#sites");
var linkString = "<a href='%href' id='%title' class='site'>%title</a>";
config.sites.forEach( site => {
	var html = linkString.replace(/%title/g, site.title)
		.replace(/%href/g, site.url);
	sitesDiv.append(html);
	console.log(site);
});
