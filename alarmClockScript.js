function showTime()
{
    var time= new Date();
    var hours= time.getHours(); // 0 - 23
    var minutes= time.getMinutes(); // 0 - 59
    var seconds= time.getSeconds(); //0 - 59
    var session= "AM";

    var day= time.getDay(); //01 - 31
    var month= time.getMonth(); // 01 - 12
    var year= time.getFullYear(); // ???? 😅
    var dayName= time.toLocaleString('en-us' ,{weekday:'long'});
    if(hours == 0)
    {
        hours=12;
    }

    if(hours>12)
        {
            hours= hours-12;
            session= "PM";
        }

    hours= (hours<10) ? "0" + hours : hours;
    minutes= (minutes<10) ? "0" + minutes : minutes;
    seconds= (seconds<10) ? "0" + seconds : seconds;

    var time= hours+ "." +minutes+ ":" +seconds+ " " +session;

    var date= day+ "/" +month+ "/" +year+ " " +dayName; 

    document.getElementById("time").innerText= time;
    document.getElementById("calendar").innerText= date;

    setTimeout(showTime,1000);
}

showTime();