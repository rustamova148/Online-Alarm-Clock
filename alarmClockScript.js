function showTime()
{
    let date = new Date();
    let hours = date.getHours(); // 0 - 23
    let minutes = date.getMinutes(); // 0 - 59
    let seconds = date.getSeconds(); //0 - 59
    let session = "AM";

    let day = date.getUTCDate(); //01 - 31
    let month = date.getUTCMonth() + 1; // 01 - 12
    let year = date.getUTCFullYear(); // ???? 😅
    let dayName = date.toLocaleString('en-us' ,{weekday:'long'});

    if(hours == 0)
    {
        hours = 12;
    }

    if(hours > 12)
        {
            hours = hours - 12;
            session = "PM";
        }

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    var timegeneral = hours + "." + minutes + ":" + seconds + " " + session;

    var dategeneral = day + "/" + month + "/" + year + " " + dayName; 


    document.getElementById("time").innerText = timegeneral;
    document.getElementById("calendar").innerText = dategeneral;

    setTimeout(showTime,1000);
}

showTime();
