function change_text(pic){
	if(pic == 1){
		document.getElementById("cont-title").innerHTML = "Work together!";
		document.getElementById("cont-desc").innerHTML = "Work with students from different backgrounds and fields <br/> of work to come up with a solution to your challenge";
		document.getElementById("cont-button").innerHTML = "Find out more";
		document.getElementById("cont-button").onclick = "window.location.href='about-us.html#about-the-bootcamp";
		document.getElementById("cont-button").setAttribute("onClick", "window.location.href='about-us.html#about-the-bootcamp'");
	}
	if(pic == 2){
		document.getElementById("cont-title").innerHTML = "Learn from the pro's!";
		document.getElementById("cont-desc").innerHTML = "Our mentors will guide you during the challenge and provide  <br/> important insights in innovation and business strategy";
		document.getElementById("cont-button").innerHTML = "I want to become a mentor!";
 		document.getElementById("cont-button").setAttribute("onClick", "window.location.href='wip.html'");
	}
	if(pic == 3){
		document.getElementById("cont-title").innerHTML = "Real problems, real solutions";
		document.getElementById("cont-desc").innerHTML = "Our previous bootcamp resulted in solutions and cooperations <br/> that kept going even after the event";
		document.getElementById("cont-button").innerHTML = "Become a partner";
		document.getElementById("cont-button").setAttribute("onClick", "window.location.href='wip.html'");
	}
	if(pic == 4){
		document.getElementById("cont-title").innerHTML = "Meet your new CO-founder";
		document.getElementById("cont-desc").innerHTML = "The bootcamp is a great place to meet people from  <br/> different diciplines and who knows, start the next <br/> unicorn together with";
		document.getElementById("cont-button").innerHTML = "Sign up";
		document.getElementById("cont-button").setAttribute("onClick", "window.location.href='wip.html'");
	}
	
}
