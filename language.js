document.addEventListener("DOMContentLoaded", function(event){
	console.log("test");
	var english_button = document.getElementById("choix_english");
	var french_button = document.getElementById("choix_french");

	english_button.addEventListener("mouseenter", function(event){
		french_button.classList.add("abt_visible");
		console.log("toto part à la plage");
	});

	english_button.addEventListener("mouseleave", function(event){
		french_button.classList.remove("abt_visible");
		console.log("toto part à la plage");
	});
});