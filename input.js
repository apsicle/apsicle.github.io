function submission() {
	/*Grabs textbox input. Strips punctuations + changes to lowercase*/
	var token = document.getElementById("token").value;
	token = token.toLowerCase();
	var punctuationless = token.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
	var input = punctuationless.replace(/\s{2,}/g," ");
	
	/*changing this variables content via "output.innerHTML = 'xyz'" makes text
	appear below the submission box. Try it.*/
	var output = document.getElementById("clue");
	
	/*Enter the cases here. 
	1) Change output.innerHTML = 'xyz'
	2) Popup via "alert('xyz')"
	3) Do something else.
	*/
	
	if (input == "hello") {
		output.innerHTML = "...m-mister?";
	}
	else if (input == "who are you") {
		
		alert('I... I don\'t remember');
	}
	else {
		alert('Nothing happens');
		return true;
	}
	
	return false;
}

