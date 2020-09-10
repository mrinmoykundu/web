
function query(){
	var today=new Date();


	var d = document.getElementsByClassName('Date')
	var expired = document.getElementsByClassName('expired')
	var time_remaining = document.getElementsByClassName('time_remaining')

	for(let i = 0; i < d.length; i++){
		list = d[i].innerText.split('/');
		var dead_line = new Date(list[2], list[1]-1, list[0], 0,0,0,0); //YY-MM-DD

		if(today >= dead_line){
		 expired[i].style.display = 'inline';
		 time_remaining[i].style.display = 'none';
		}else{
			days_remaining = (dead_line - today)/(1000*60*60*24);
			hours = (days_remaining - Math.floor(days_remaining))*24;
			minutes = (hours - Math.floor(hours))*60;
			time_remaining[i].innerHTML = 'Time Remaing ' + Math.floor(days_remaining)
			 + ' days ' + Math.floor(hours) + ' hours ' + Math.floor(minutes) +
			 ' minutes ';
		}
	}
}