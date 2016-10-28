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
	
	function check(substring) {
		if (input.indexOf(substring) == -1) {
			return false;
		}
		else {
			return true;
		}
	}
	
	function doResponse2(str1, str2, str3) {
		//sets up choices and makes sure the text appears in order
		read(str1);
		var time1 = str1.length * 100;
		setTimeout(function() { c_1.innerHTML = str2; }, time1 + 500);
		setTimeout(function() { c_2.innerHTML = str3; }, time1 + 1000);
	}
		
	function doResponse1(str1, str2) {
		read(str1);
		var time1 = str1.length * 100;
		setTimeout(function() { c_1.innerHTML = str2; }, time1 + 500);
	}


	/*Enter the cases here. 
	1) Change output.innerHTML = 'xyz'
	2) Popup via "alert('xyz')"
	3) Do something else.
	*/
	
	//To add:
	//what are you
	//formaldehyde
	//candlesticks
	//emily
	//halloween, trick r treak, pillowcases
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
	else if (input.indexOf("yes") !== -1 && hidden == "...m-mister? Are you going to hurt me?"){
		printLetterByLetter("clue", "No! Get away from me!", 100);
	}
	else if (hidden == "I don't believe you.") {
		printLetterByLetter("clue", "Get out of here!", 100);
	}
	else if (hidden == "No! Get away from me!") {
		printLetterByLetter("clue", "Get out of here!", 100);
	}
	else if (input.indexOf("bye") !== -1) {
		printLetterByLetter("clue", "I don't want to be here anymore...", 100);
	}
	else if (input == "how old are you") {
		read("Don't ask me that!");
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
	else if (check("emily")) {
		doResponse2("...Yes? I'm here.", "We're here to help", "Goodbye");		
	}
	//End intro section
	else if (input.indexOf("your name") !== -1 || input.indexOf("you called") !== -1) {
		printLetterByLetter("clue", "I think my name was Emily...", 100);
	}	
	
	//How can we help you?
	else if (input.indexOf("help") !== -1 || input.indexOf("you want") !== -1) {
		prob = Math.random();
		if(prob < 0.8) {
			printLetterByLetter("clue", "I don't want to be here anymore", 100);
		}
		else {
			printLetterByLetter("clue", "I think I'm trapped here... but I don't know how to get out.", 100);
		}
	}
	
	//Don't be scared
	else if (check("why") && check("scared")) {
		read("Wouldn't you be?");
	}
	else if (check("don't") && check("scared")) {
		read("I can't help it. This house gives me the creeps.");
	}
	
	//Setting you free?
	else if (input.indexOf("you free") !== -1 || input.indexOf("ritual") !== -1 || input.indexOf("free you") !== -1 || check("get you out")) {
			doResponse1("I don't trust you...", "1.) I just want to help, I promise I won't hurt you.");
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
			printLetterByLetter("clue", "That man took me downstairs, but I don't remember what happened after that I was so scared.", 100);
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
			printLetterByLetter("clue", "I'm sorry, I can't remember.", 100);
		}
	}
	
	//Him...
	else if (input.indexOf(" man ") !== -1 || input.endsWith("man") || input.indexOf("murderer") !== -1 || input.indexOf("killer") !== -1) {
		doResponse2("He's bad. He's a bad man!", "1.) What did he do to you?", "2.) What can you tell me about him?");
	}
	
	//Favorites
	else if (input.indexOf("favorite") !== -1) {
		read("I don't know anything about that...");
	}
	
	//Flavor Clues
	else if (input.indexOf("book") !== -1) {
		//Checks if 'book' is a substring of input string		
		read("I think I saw him moving something on the bookshelf.");
	}
	else if (input.indexOf("pictures") !== -1 || check("photos")) {
		doResponse1("I saw a lot of pictures of a woman lying around", "Who is she?");
	}
	//Formaldehyde
	else if (input.indexOf("formaldehyde") !== -1) {
		read("Ugh that horrible smell! All around me...");
	}
	//Queen's gambit
	else if (input.indexOf("queen's gambit") !== -1) {
		read("The poor woman...");
	}
	//Chess
	else if (input.indexOf("chess") !== -1) {
		read("I think he plays...");
	}
	//Candles
	else if (check("candles")) {
		doResponse1("Burning, whispers, yearnings, turning, fleeting, spurning, never can be returning", "1.) ...What?");
	}
	//Shoes
	else if (check("shoe")) {
		read("That's mine! I wonder where the other one is...");
	}
	//Resurrection
	else if (check("resurrection")) {
		read("You shouldn't read that... He would read it and go mad.");
	}
	//Pirate
	else if (input.indexOf("pirate") !== -1) {		 
		doResponse2("Yes... there was a boy here with me...", "1.) Who was he", "2.) What happened to him");
		//printLetterByLetter("clue", "Yes... there was a boy here with me...", 100);
		//printLetterByLetter("c_1", "1.) Who was he", 100);
		//printLetterByLetter("c_2", "2.) What happened to him", 100);
	}
	//Pillowcase
	else if (input.indexOf("pillowcase") !== -1) {
		read("Oh, I'm remembering something... 'Trick or Treat! :)'");
	}
	//Dress
	else if (input.indexOf("dress") !== -1 && input.indexOf("dressed") == -1) {
		read("You found my dress! But it's all torn up and dirty...");
	}
	//album
	else if (input.indexOf("summer of '78") !== -1) {
		read("He kept playing that over and over. He said it was special to him");
	}
	//letter
	else if (input.indexOf("letter") !== -1) {
		doResponse1("Hmm? I haven't seen a letter around here. What does it say?", "1.) Read the letter");
	}
	
	//Easter eggs
	else if ((input.indexOf("kappa") !== -1 || input.indexOf("keepo") !== -1) && input !== "keepo kappa 123") {
		read("Everybody type keepo kappa 123 in chat");
	}
	else if (input == "keepo kappa 123") {
		printLetterByLetter("clue", "I'm... remembering something... http://i.imgur.com/n5LvgA7.gif", 100);
	}
	else if (input == "fight me" || input == "fite me") {
		printLetterByLetter("clue", "Look in the closet.", 100);
	}
	else if (check("fuck") || check("shit") || check("damn")) {
		read("Don't use that hellish language with me!");
	}
	else if (input.indexOf("halloween") !== -1) {
		read("Never again.");
	}
	
	//Default
	else {
		output.innerHTML = "The crystal planchette sits motionless on the ouija board.";
	}
	
	return false;
}

