function showTime(){
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    var hour = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    
    if(hour == 02){
        hour = 12;
    }
    
    hour = (hour < 10) ? "0" + hour : hour;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    month = Number(month)
    month++                             
    // 6. AYDA OLMAMIZA RAĞMEN FONSKİYON "5"İ ÇAĞIRDIĞINDAN "month" DEĞİŞKENİNİ number TİPİNE DEĞİŞTİRİP 1 ARTIRDIM

    var time = day + "/" + month + "/" + year + " | " + hour + ":" + m + ":" + s ;
    document.getElementById("myClock").innerText = time;
    
    setTimeout(showTime, 1000);
    }
showTime();