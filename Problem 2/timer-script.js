const start_timer_button = document.getElementById("timer_btn");

rxjs.fromEvent(start_timer_button, 'click')
  .subscribe(() => start_timer()
);

function start_timer()
{
	let hours = document.getElementById("hours").value;
	let minutes = document.getElementById("minutes").value;
	let seconds = document.getElementById("seconds").value;
	let timer_button = document.getElementById("timer_btn");
	
	let current_seconds = seconds;
	
	if(seconds < 0 || seconds > 60)
	{
		alert("Seconds have to be between 0 and 60 inclusive!");
		return false;
	}
	
	if(minutes < 0 || minutes > 60)
	{
		alert("Minutes have to be between 0 and 60 inclusive!");
		return false;
	}
	
	if(hours < 0)
	{
		alert("Minimum value for hours is 0. Input a value that is 0 or greater than 0!");
		return false;
	}
	
	if(seconds == '' && minutes == '' && hours == '')
	{
		alert("No values entered. You must specify a value/values in order to start the timer!");
		return false;
	}
	
	let hours_displayed = document.getElementById("hours_shown");
	let minutes_displayed = document.getElementById("minutes_shown");
	let seconds_displayed = document.getElementById("seconds_shown");
	let colon_separate_time = document.getElementById("colon_to_separate_time");
	let colon_separate_time_2 = document.getElementById("colon_to_separate_time_2");
	
	hours_displayed.innerHTML = hours;
	colon_separate_time.innerHTML = ":";
	minutes_displayed.innerHTML = minutes;
	colon_separate_time_2.innerHTML = ":";
	seconds_displayed.innerHTML = seconds;
	
	
	
	if(seconds != '' && minutes == '' && hours == '')
	{
		minutes_displayed.innerHTML = 0;
		hours_displayed.innerHTML = 0;
	}
	
	if(seconds == '' && minutes != '' && hours == '')
	{
		seconds_displayed.innerHTML = 0;
		hours_displayed.innerHTML = 0;
	}
	
	if(seconds == '' && minutes == '' && hours != '')
	{
		minutes_displayed.innerHTML = 0;
		seconds_displayed.innerHTML = 0;
	}

	function showing_seconds_minutes_hours_function() 
	{
	  if(current_seconds == seconds)
	  {
		seconds_displayed.innerHTML = seconds;
		seconds--;
		
	    if (seconds >= 0) 
		{
		  showing_seconds_minutes_hours_function();
		}
		
		if (seconds == 0)
		{
			if(minutes != 0)
			{
				minutes--;
				seconds = 60;
				minutes_displayed.innerHTML = minutes;
			}
			
			if(minutes == 0 && seconds == 0 && hours != 0)
			{
				hours--;
				minutes = 59;
				seconds = 59;
				hours_displayed.innerHTML = hours;
				minutes_displayed.innerHTML = minutes;
			}
		}
		
	  }
	  
	  else
	  {
		  setTimeout(function() 
		  {
			seconds_displayed.innerHTML = seconds;
			seconds--;
			
			if (seconds >= 0) 
			{
			  showing_seconds_minutes_hours_function();
			}
			if (seconds == 0)
			{
				if(minutes != 0)
				{
					minutes--;
					seconds = 60;
					minutes_displayed.innerHTML = minutes;
				}
				
				if(minutes == 0 && seconds == 0 && hours != 0)
				{
					hours--;
					minutes = 59;
					seconds = 59;
					hours_displayed.innerHTML = hours;
					minutes_displayed.innerHTML = minutes;
				}
			}
			
		  }, 1000)
	  }
	  
	}
	
	showing_seconds_minutes_hours_function();
}
