window.addEventListener("load",()=>{
    var spinner = document.querySelector(".spinner");
    var clockDiv = document.querySelector(".clock-div");
    
    setTimeout(()=>{
        clockDiv.style.display = "flex";
        spinner.style.display = "none";
        clockDiv.style.opacity = "1";
    }, Math.floor(Math.random()*999)+1000);
})


setInterval(() => {
    var current = new Date();
    var hours = current.getHours();
    var minutes = current.getMinutes();
    var seconds = current.getSeconds();
    let period = document.querySelector(".period");
    if(hours >= 12){
        period.innerText = "PM"
    }else{
        period.innerText = "AM"
    }
    hours = hours > 12 ? hours % 12 : hours;
    if(hours < 10) hours = "0" + hours;
    document.querySelector(".hours").innerText = hours;
    if(minutes < 10){
        minutes = "0" + minutes
    }
    document.querySelector(".minutes").innerText = minutes;
    if(seconds < 10){
        seconds = "0" + seconds; 
    }
    document.querySelector(".seconds").innerText = seconds;
}, 1000);