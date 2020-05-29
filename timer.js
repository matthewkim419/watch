

var t_minute = document.querySelector('#m_timer').value;
var t_second = document.querySelector('#s_timer').value;

var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
var seconds = Math.floor((t % (1000 * 60)) / 1000); 




var counter = t_minute : t_second
setInerval(function () {
    counter--;
    if (counter >= 0) {
        i
    }
 })





var deadline = new Date("Jan 5, 2018 15:37:25").getTime(); 
var x = setInterval(function() { 
var now = new Date().getTime(); 
var t = deadline - now; 



document.getElementById("demo").innerHTML = days + "d "  
+ hours + "h " + minutes + "m " + seconds + "s "; 
    if (t < 0) { 
        clearInterval(x); 
        document.getElementById("demo").innerHTML = "EXPIRED"; 
    } 
}, 1000); 