function start_timer()
{
	let hours = document.getElementById("hours").value;
	let minutes = document.getElementById("minutes").value;
	let seconds = document.getElementById("seconds").value;
	let current_seconds = seconds;
	
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
				minutes = 60;
				seconds = 59;
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
