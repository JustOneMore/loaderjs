var LoaderJS = {};
LoaderJS.stack = [];
LoaderJS.log = function(msg) {
	function logit(msg) {console.warn(msg);}
	var Logs = {
	"MODULE ALREADY LOADED": logit("The module is already loaded!"),
	"MODULE ERROR LOADING" : logit("There has been an error while loading the module!"),
	};
};
LoaderJS["_include"] = function(url,boolOnce,boolRequire) {
	LoaderJS.stack.push(url);
	if(boolOnce && (LoaderJS.stack.indexOf(url) != -1)) {
		LoaderJS.log("MODULE ALREADY LOADED");
		return;
	}
	$.ajax({
		method: "GET",
		mimeType: 'text/plain; charset=UTF-8',
		url: url,
		dataType: "text",
		async: false,
		error: function(error) {
			LoaderJS.log("MODULE ERROR LOADING");
			if(boolRequire) {alert("Required stopped the execution!");}
		},
		success: function(result) {document.write(result);}
	});
};
LoaderJS["include"] = function(url)     {LoaderJS["_include"](url,false,false);}
LoaderJS["includeOnce"] = function(url) {LoaderJS["_include"](url,true,false);};
LoaderJS["require"] = function(url)     {LoaderJS["_include"](url,false,true);}
LoaderJS["requireOnce"] = function(url) {LoaderJS["_include"](url,true,true);}
/*
//Used just like:


LoaderJS.include("my-file.html");
LoaderJS.include("my-another-file.js");


//That is all... FOLKS!!
*/
