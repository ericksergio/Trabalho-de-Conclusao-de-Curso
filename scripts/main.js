"use strict"

var hh = 0;
var mm = 0;
var ss = 0;

var timer = 1000; //Quantos milesimos valem 1 segundo
var crono;

function startFunction(){
    crono = setInterval(() => {timerFunction()}, timer);    
}

function pauseFunction(){
    clearInterval(crono);
}

function stopFunction(){
    hh = 0;
    mm = 0;
    ss = 0;
}

function timerFunction(){
    ss++;

    if(ss == 60){
        mm++;

        if(mm == 60){
            mm = 0;
            hh++;
        }
    }


    var format = (hhours < 10 ? '0' + hhours : hhours) + ':' +  (mminutes < 10 ? '0' + mminutes : mminutes) + ':' +  (sseconds < 10 ? '0' + sseconds : sseconds)

    let hhours = document.getElementById('hours').innerText = hh;
    let mminutes = document.getElementById('minutes').innerText = mm;
    let sseconds = document.getElementById('seconds').innerText = ss;

    
}