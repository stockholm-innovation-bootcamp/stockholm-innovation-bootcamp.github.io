function change_text(pic){
	if(pic == 1){
		document.getElementById("cont-title").innerHTML = "First Picture";
		document.getElementById("cont-desc").innerHTML = "Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Nam rissu leo, auctor quis <br/> massa sit amet, iaculis tempus enim. Nulla <br/> sed purus facilisis, hendrerit mi faucibus, <br/> faucibus nunc.";
	}
	if(pic == 2){
		document.getElementById("cont-title").innerHTML = "Second Picture";
		document.getElementById("cont-desc").innerHTML = "Different text, idk, someone should write this cause as far as you can see, I'm not good at writing text haha (not even funny)";
	}
	if(pic == 3){
		document.getElementById("cont-title").innerHTML = "Third Picture";
		document.getElementById("cont-desc").innerHTML = "I assume no one pressed this tbh";
	}
	if(pic == 4){
		document.getElementById("cont-title").innerHTML = "Fourth Picture";
		document.getElementById("cont-desc").innerHTML = "hackerman";
	}
	
}
