// take a string from the user  
document.getElementById('check_btn').onclick =
function check(){
    
    document.getElementById('result').style.visibility = 'visible';
   
    var date1 = document.getElementById('day').value;
    var month1  = document.getElementById('month').value;
    var year1  = document.getElementById('year').value;

var currentDate = new Date();

var date2 = currentDate.getDate();
var month2  = 1 + currentDate.getMonth();
var year2  = currentDate.getFullYear();

var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

if(date1 > date2){
date2 = date2 + month[month2 - 1];
month2 = month2 - 1;
}
if(month1 > month2){
month2 = month2 + 12;
year2 = year2 - 1;
}
var d = date2 - date1;
var m = month2 - month1;
var y = year2 - year1;

document.getElementById("result").innerHTML = 'Your Age is '+y+' Years '+m+' Months '+d+' Days';
}
    /*
    1000ms = 1s
    60s = 1m
    60m = 1hr
    24hrs = 1day
    */