/* jshint esversion: 6 */
// var config ={ //This is the site configuration
// 		"name" : "Christian Påbøl",
// 		"title": "Awesome homepage belonging to %name",
// 		"sites":	[
// 			{"title" : "Google",		"url" : "http://www.google.com/"},
// 			{"title" : "Reddit",		"url" : "http://www.reddit.com/"},
// 			{"title" : "Facebook",		"url" : "http://www.facebook.com/"},
// 			{"title" : "Lectio", 		"url" : "https://www.lectio.dk/lectio/681/forside.aspx"},
// 			{"title" : "Commitstrip",	"url" : "http://www.commitstrip.com/"},
// 			{"title" : "xkcd",			"url" : "http://www.xkcd.com/"},
//   			{"title" : "Dance", 		"url" : "#"},
// 			{"title" : "Youtube", 		"url" : "https://www.youtube.com"}
// 		],
// 		"configUpdate" : 1
// 	};
const config = {
	"name" : "Christian Påbøl",
	"title": "Welcome %name",
	"folders": [
		{"title" : "Social", 			'sites' : [
			{'title' : "Facebook", 'url' : "https://www.facebook.com"},
			{'title' : "Slack - unpr", 'url' : "http://unpr.slack.com"},
			{'title' : "Twitter", "url" : "http://twitter.com"}
		]},
		{"title" : "Produktivitet", 	'sites' : [
			{"title" : "Google Docs", "url" : "http://drive.google.com/"},
			{"title" : "Overleaf", "url" : "http://overleaf.com/"},
			{"title" : "Lectio", "url" : "http://www.lectio.dk"},
			{"title" : "Stack overflow", "url" : "http://stackoverflow.com/"}
		]},
		{"title" : "Prokrastination",	'sites': [
			{"title" : "Reddit", "url" : "http://www.reddit.com/"},
			{"title" : "SMBC", "url" : "http://smbc-comics.com"},
			{"title" : "Commitstrip", "url" : "http://www.commitstrip.com"},
			{"title" : "Youtube", "url" : "http://www.youtube.com"},
			{"title" : "Netflix", "url" : "https://www.netflix.com/"}
		]},
		{"title" : "Cancer", 			'sites' : [
			{"title" : "Dance", "url" : "#"},
			{"title" : "CSS-shapes", "url" : "shapes.html"},
			{"title" : "AlbumCover", "url" : "albumcover.html"}
		]}
	],
	"backgrounds" : [
		{'name' : "Blue", 'color' : '#0088FF', 'fileName' : "blue" },
		{'name' : "BlueGreen", 'color' : '#50CCCC', 'fileName' : 'bluegreen' },
		{'name' : "Orange", 'color' : '#FFAA00', 'fileName' : 'orange' },
		{'name' : "Purple", 'color' : '#9000FF', 'fileName' : 'purple' },
		{'name' : "Red", 'color' : '#FF0000', 'fileName' : 'red' }
	],
	"feedReddit":"webdev",
	"configUpdate" : 1
};

//First we set the header with variables
var heading = config.title;
heading = heading.replace(/%name/g , "<span class='name'>"+config.name+"</span>");
console.log(heading);
document.getElementById("title").innerHTML = heading;

// We load the reddit feed asynchrously so do that Now
loadFeed(config.feedReddit);

var sitesDiv = $("#sites");
var linkString = "<div class='siteDiv' id='%title'><a href='%href' id='%title' class='site'>%title</a><ul class='siteList' id='%title'></ul></div>";
config.folders.forEach( folder => {
	var html = linkString.replace(/%title/g, folder.title)
		.replace(/%href/g, "#");
	sitesDiv.append(html);
	let siteList = $(".siteList#"+folder.title);
	folder.sites.forEach( site =>{
			siteList.append(`<a id='${site.title}'  href='${site.url}'><li>${site.title}</li></a>`);
	});
	$("div#"+folder.title).on('mouseenter', () => {$(`.siteList#${folder.title}`).addClass('expanded');})
	  .on('mouseleave', () =>
	{$(`.siteList#${folder.title}`).removeClass('expanded');})
	  .on('click', ()=>
  	{$(`.siteList#${folder.title}`).toggleClass('expanded');});
	// $("div#"+folder.title).on('mouseenter', () => {$(`.siteList#${folder.title}`).slideDown('fast');})
	//   .on('mouseleave', () => {$(`.siteList#${folder.title}`).slideUp('fast');});

});

// $('.siteList > li').on('click', function(){$(this).find('a').trigger('click')});

$("#Dance").on('click', shakeIt);
function shakeIt(){
	$("body").append("<script src='topkek.js' />")
}

function expand(id){
	$('.siteList#'+id).addClass('expanded');
}
function retract(){
	$('.siteList#'+id).removeClass('expanded');
}

config.backgrounds.forEach((el)=>{
	let output = `<div data-name='${el.name}' data-fileName='${el.fileName}' class='colorDiv' style='background-color: ${el.color}' onclick='changeBackground(this)'></div>`
	$('#colorContainer').append(output);
});

window.changeBackground = function(element){
	let fileName = $(element).data('filename');	jQuery.post('background.php', {file : fileName}, function(req, status){
		alert(`Tried to change background with status ${status} for file ${fileName}`);
		location.reload();

	});

}
