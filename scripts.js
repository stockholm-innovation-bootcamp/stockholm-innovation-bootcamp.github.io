function change_text(pic){
	if(pic == 1){
		document.getElementById("cont-title").innerHTML = "Work together!";
		document.getElementById("cont-desc").innerHTML = "Work with students from different backgrounds and fields of work to come up with a solution to your challenge";
	}
	if(pic == 2){
		document.getElementById("cont-title").innerHTML = "Learn from the pro's!";
		document.getElementById("cont-desc").innerHTML = "Our mentors will guide you during the challenge and provide important insights in innovation and business strategy";
	}
	if(pic == 3){
		document.getElementById("cont-title").innerHTML = "Real problems, real solutions";
		document.getElementById("cont-desc").innerHTML = "Our previous bootcamp resulted in solutions and cooperations that kept going even after the event";
	}
	if(pic == 4){
		document.getElementById("cont-title").innerHTML = "Meet your new CO-founder";
		document.getElementById("cont-desc").innerHTML = "The bootcamp is a great place to meet people from different diciplines and who knows, start the next unicorn together with";
	}
	
}
