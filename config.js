var config = undefined;

$(document).ready(function(){
	getConfig(function(){
		console.log(config);
		var heading = config.title;
		console.log(heading);
		heading.replace(/%name/g , "<span class='name'>"+config.name+"</span>");
		$("#title").innerHTML(heading);
	});
});

function readConfig(){ //Reads config from file
	var data = $.get({"url" : 'config.json', "callback" : function(data) {
		console.log(data);
		if(data != undefined && data != null && typeof(data) == "object")
			config = data;
		console.log(data);
		cacheConfig(config);
	}, "datatype" : "json"});
	var counter = 1;

	
}
function cacheConfig(data){
	data.timesRead = 1;
	jsonString = JSON.stringify(data);
	localStorage.setItem("config", jsonString);
}

function checkCookieConfig(){
	return false; //TODO - fix
	if(typeof(localStorage.config) == "string")
	{
		config = JSON.parse(localStorage.config);
		if (config.timesRead >= config.configUpdate || config.timesRead == -1) //Update the stored config after a set amount of times
			return false;//Read from file
		config.timesRead += 1;
		return true;//Go ahead with adding stuff
	}
}

function getConfig(callback){//Read the config, then run the following function
	//First we check to see if the config has been read already and stored in localstorage
	if (!checkCookieConfig()); //Will return false if no config found or config stored is too old
		readConfig(); //Else we read from the config file
	callback();
}