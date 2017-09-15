function updateTime(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    if (minutes < 10){
        minutes = "0" + minutes;
    }
    var t_str = hours + ":" + minutes + " ";
    if (hours > 11){
        t_str += "PM";
    }
    else {
        t_str += "AM";
    }
    document.getElementById("timeTitle").innerHTML = t_str;
}

setInterval(updateTime, 1000);
