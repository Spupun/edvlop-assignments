

function showTime(){

    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM";

    if(h > 12){
        h = h-12;
    }
    if(h<=12){
        session = "PM";

    }

    let time = h + ' : ' + m + ' : ' + s + " : " + session ;
    document.getElementsByTagName('h1')[0].innerText =time;
    setTimeout(showTime,1000);
  

}



