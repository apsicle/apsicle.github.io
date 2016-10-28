

function submission() {
	/*Grabs textbox input. Strips punctuations + changes to lowercase*/
	var token = document.getElementById("token").value;
	token = token.toLowerCase();
	var punctuationless = token.replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g,"");
	var input = punctuationless.replace(/\s{2,}/g," ");
	
	/*changing this variables content via "output.innerHTML = 'xyz'" makes text
	appear below the submission box. Try it.*/
	var output = document.getElementById("clue");
	
	function printLetterByLetter(destination, message, speed){
    var i = 0;
    var interval = setInterval(function(){
        document.getElementById(destination).innerHTML += message.charAt(i);
        i++;
        if (i > message.length){
            clearInterval(interval);
        }
    }, speed);
}

	function read(msg) {
		printLetterByLetter("clue", msg, 100);
	}
	
	

	/*Enter the cases here. 
	1) Change output.innerHTML = 'xyz'
	2) Popup via "alert('xyz')"
	3) Do something else.
	*/
	var hidden = output.innerHTML; // retrieves what was last said...
	var c_1 = document.getElementById("c_1");
	c_1.innerHTML = "";
	var c_2 = document.getElementById("c_2");
	c_2.innerHTML = "";
	output.innerHTML = "";
	//Intro section
	if (input == "hello" || input == "hi" || input == "greetings") {
		printLetterByLetter("clue", "...m-mister? Are you going to hurt me?", 100);
	}
	else if ((input.indexOf("no") !== -1 || input.indexOf("not") !== -1 || input.indexOf("won't") !== -1) && hidden == "...m-mister? Are you going to hurt me?"){
		printLetterByLetter("clue", "I don't believe you.", 100);
	}
	else if (hidden == "I don't believe you.") {
		printLetterByLetter("clue", "Get out of here!", 100);
	}
	else if (input.indexOf("bye") !== -1) {
		printLetterByLetter("clue", "I don't want to be here anymore...", 100);
	}
	else if (input == "who are you" || input.indexOf("speaking") !== -1 || input.indexOf("talking") !== -1 || input == "who is this") {
		prob = Math.random();
		if(prob < 0.8) {
			printLetterByLetter("clue", "I don't remember much...", 100);
		}
		else {
			printLetterByLetter("clue", "I think my name was Emily...", 100);
		}
	}
	else if (input.indexOf("remember") !== -1) {
		prob = Math.random();
		if(prob < 0.8) {
			printLetterByLetter("clue", "It was all a haze, I was so scared...", 100);
		}
		else {
			printLetterByLetter("clue", "I think my name was Emily...", 100);
		}
	}
	else if (input.indexOf("boy") !== -1 && input.indexOf("girl") !== -1) {
		read("What kind of question is that? Leave me alone!");
	}
	
	//End intro section
	else if (input.indexOf("your name") !== -1 || input.indexOf("you called") !== -1) {
		printLetterByLetter("clue", "I think my name was Emily...", 100);
	}
	
	//Flavor Clues
	else if (input.indexOf("book") !== -1) {
		//Checks if 'book' is a substring of input string		
		printLetterByLetter("clue", "I think I saw him moving something on the bookshelf.", 100);
	}
	//How can we help you?
	else if (input.indexOf("help") !== -1 || input.indexOf("you want") !== -1) {
		prob = Math.random();
		if(prob < 0.8) {
			printLetterByLetter("clue", "I don't want to be here anymore", 100);
		}
		else {
			printLetterByLetter("clue", "I think I'm trapped here...", 100);
		}
	}
	
	//Setting you free?
	else if (input.indexOf("you free") !== -1 || input.indexOf("ritual") !== -1 || input.indexOf("free you") !== -1) {
			printLetterByLetter("clue", "I don't trust you...", 100);
			printLetterByLetter("c_1", "1.) I just want to help, I promise I won't hurt you.", 100);
		}
	//Basement
	else if (input.indexOf("basement") !== -1 || input.indexOf("downstairs") !== -1) {
		prob = Math.random();
		if(prob < 0.8) {
				printLetterByLetter("clue", "No! Don't go down there!", 100);
				}
		else {
			printLetterByLetter("clue", "I think I'm trapped here...", 100);
		}
	}
	
	//How did you die?
	else if ((input.indexOf("killed") !== -1 || input.indexOf("murdered") !== -1 || input.indexOf("die") !== -1) && input.indexOf("you") !== -1) {
		if (input.indexOf("who") !== -1) {
			printLetterByLetter("clue", "The man who lived here... he did this to me.", 100);
		}
		else if (input.indexOf("how") !== -1) {
			printLetterByLetter("clue", "That man took us downstairs, but I don't remember what happened after that I was so scared.", 100);
		}
	}
	
	//How did the wife die?
	else if ((input.indexOf("killed") !== -1 || input.indexOf("murdered") !== -1 || input.indexOf("die") !== -1) && input.indexOf("wife") !== -1) {
		if (input.indexOf("how") !== -1) {
			printLetterByLetter("clue", "I don't know anything about that...", 100);
		}
	}
	else if (input.indexOf("wife") !== -1 || input.indexOf("woman") !== -1) {		
		printLetterByLetter("clue", "Who?", 100);
	}
	
	//Is anyone else here?
	else if (input.indexOf("anyone") !== -1 || input.indexOf("anybody") !== -1 || input.indexOf("else") !== -1) {
		if (input.indexOf("here") !== -1) {
			printLetterByLetter("clue", "There was a boy here with me...", 100);
		}
	}
	else if (input.indexOf("boy") !== -1 || input.indexOf("pirate") !== -1) {		 
		printLetterByLetter("clue", "Yes... there was a boy here with me...", 100);
		printLetterByLetter("c_1", "1.) Who was he", 100);
		printLetterByLetter("c_2", "2.) What happened to him", 100);
	}
	
	//Easter eggs
	else if (input.indexOf("kappa") !== -1 || input.indexOf("keepo") !== -1) {
		read("Everybody type keepo kappa 123 in chat");
	}
	else if (input == "keepo kappa 123") {
		printLetterByLetter("clue", "I'm... remembering something.... http://i.imgur.com/n5LvgA7.gif", 100);
	}
	else if (input == "fight me" || input == "fite me") {
		printLetterByLetter("clue", "Look in the closet.", 100);
	}
	
	//Default
	else {
		output.innerHTML = "The crystal planchette sits motionless on the ouija board.";
	}
	
	return false;
}

