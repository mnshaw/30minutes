function showTime() {
	var currentdate = new Date();
	currentdate.setMinutes(currentdate.getMinutes() + 30);
	var hour=currentdate.getHours();
	var min=currentdate.getMinutes();
	var format = "AM";
	if (hour > 11) {format="PM";}
	if (hour > 12) { hour = hour - 12; }
	if (hour == 0) { hour = 12; }  
	if (min < 10) {min = "0" + min;}
	var time = hour + ":" + min + format;

	var elem = document.getElementById('time');
	var html = elem.innerHTML;
	elem.innerHTML = time;
	t = setTimeout(function() {
    	showTime()
  	}, 1000);
}

function checkDarkMode() {
    var checked = document.getElementById("darkmode").checked;
    if (checked) {
    	$('body').addClass('darkmode');
    } else {
    	$('body').removeClass('darkmode')
    }
}

function checkPastelMode() {
    var checked = document.getElementById("pastelmode").checked;
    if (checked) {
    	$('body').addClass('pastelmode');
    } else {
    	$('body').removeClass('pastelmode')
    }
}


showTime();