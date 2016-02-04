'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	//console.log("Javascript connected!");

	var object = $(".friendList");
	//console.log(object.find('a').text());
	var i,name1,name,anagram;
	for(object){
		name  = $(this).find("a");
		console.log(name.text());
		anagram = name.click(anagrammedName(name));
	}
//	console.log("name= "+ name);
	//var anagram = name.click(anagrammedName(name));
	//console.log(anagram);
	//name.text(anagram);
}

function anagrammedName(nameP) {

	name = nameP.text();
	//nameP.preventDefault();
	if (name == "Doug Engelbart") {
		return "Notable Grudge";
	} 
	else if (name == "Ivan Sutherland") {
		return "Vandal Heist Run";
	}
	else if (name == "JCR Licklider") {
		return "Crick Rid Jell";
	}
	else if (name == "Vannevar Bush") {
		return "Ravens Van Hub";
	}
	else if (name == "Alan C. Kay") {
		return "Canal Yak";
	}
	else if (name == "Allen Newell") {
		return "Ellen All New";
	}
	else if (name == "Lucy Suchman") {
		return "Lunacy Chums";
	}
	else if (name == "Grace Hopper") {
		return "Gear Chopper";
	}
	else {
		console.log(name + " not known for anagramming.");
		return name;
	}
}