var deadline = 'October 31 2017 00:00:00 GMT-0400';

function getTimeRemaining(endtime){
	var t = Date.parse(endtime) - Date.parse(new Date) //Date.parse parses into milliseconds
  var seconds = Math.floor( (t/1000) % 60);
	var minutes = Math.floor( (t/(1000*60) % 60));
	var hours = Math.floor( (t/(1000*60*60) % 24));
	var days = Math.floor( (t/(1000*60*60*24) ));
	return {
		'total': t,
		'days': days,
		'hours': hours,
		'minutes': minutes,
		'seconds': seconds,
	};
}

function makeClock(id, endtime){
	var clock = document.getElementById(id);

  
  var daysSpan = clock.querySelector('.days'); //references empty spans in html
var hoursSpan = clock.querySelector('.hours');
var minutesSpan = clock.querySelector('.minutes');
var secondsSpan = clock.querySelector('.seconds');
      
      function updateClock(){
	      var t = getTimeRemaining(endtime);
        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = t.hours;
        minutesSpan.innerHTML = t.minutes;
        secondsSpan.innerHTML = t.seconds;
        if(t.total <= 0) {
          clearInterval(timeinterval) //stops running update
        }
      }
    updateClock();
    var timeinterval = setInterval(updateClock, 1000); //repeats function continuously
}

makeClock('clock', deadline); // run function once at first to avoid delay