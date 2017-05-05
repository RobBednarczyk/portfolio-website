
var d = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var weekday = days[d.getDay()];
var year = d.getFullYear();
var month = months[d.getMonth()];
var day = d.getDate();

document.getElementById("date").innerHTML = weekday + ", " + day + " " + month + " " + year;
