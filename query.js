
function query(){
	var today=new Date();


	var d = document.getElementsByClassName('Date')
	var expired = document.getElementsByClassName('expired')

	for(let i = 0; i < d.length; i++){
		list = d[i].innerText.split('/');
		var dead_line = new Date(list[2], list[1]-1, list[0], 0,0,0,0); //YY-MM-DD

		if(today >= dead_line){
		 expired[i].style.display = 'inline';
		}
	}
}