

function response(selection) {
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
	var hidden = output.innerHTML; // retrieves what was last said...
	var c_1 = document.getElementById("c_1");
	c_1.innerHTML = "";
	var c_2 = document.getElementById("c_2");
	c_2.innerHTML = "";
	output.innerHTML = "";
	//Intro section
	if (hidden == "Yes... there was a boy here with me..." || hidden == "There was a boy here with me...") {
		if(selection == 1) {
			read("We went trick \'r treating together every year...");
			}
		else if(selection == 2) {
			read("I don't know... he's gone now. But I'm still here.");
			}
	}
	else if (hidden == "I don't trust you...") {
		if(selection == 1) {
			read("I don't even know what happened to me... Maybe you can find something to trigger my memory.");
		}
	}
	else if (hidden == "He's bad. He's a bad man!") {
		if(selection == 1) {
			read("He said he didn't want to hurt me. But he's a liar!");
		}
		else if(selection == 2) {
			read("I don't want to talk about the bad man!");
		}
	}
	else if (hidden == "Burning, whispers, yearnings, fleeting, floating, turning, never to be returning") {
		if (selection == 1) {
			doResponse1("I'm sorry, was I saying something?", "1.) Don't Respond.");
		}
	}
	else if (hidden == "...Yes?") {
		if (selection == 1) {
			read("Thank you...");
		}
		else if (selection == 2) {
			read("Please be careful.");
		}
	}
	else if (hidden == "I saw a lot of pictures of a woman lying around") {
		if (selection == 1) {
			read("I don't know but I feel like I've seen her before, maybe...");
		}
	}
	else if (hidden == "Hmm? I haven't seen a letter around here? What does it say?") {
		if (selection == 1) {
			read("Oh. He said he'd make it up to them... I don't know what he meant.");
		}
	}
	else {
		output.innerHTML = "The crystal planchette sits motionless on the ouija board.";
	}
	return false;
}

