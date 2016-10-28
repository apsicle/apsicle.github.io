

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
			read("Give me some time...");
		}
	}
	else {
		output.innerHTML = "The crystal planchette sits motionless on the ouija board.";
	}
	return false;
}

