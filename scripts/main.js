function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        if (--timer < 0) {
            timer = duration;
            setTimeout(timer);
        }
    }, 1000);
}

var getTime  = document.getElementById('temp-value');

window.onclick = function () {
    var duration = 60 * getTime.value // Converter para segundos
        display = document.querySelector('#timer'); // selecionando o timer
    startTimer(duration, display); // iniciando o timer
};


function restartTimer(duration, display) {
    document.location.reload(false);
}


//Cronometro Functions
function formatTwoDigits(digit){
    if(digit<10){
        return '0' + digit
    }else{
        return digit
    }
}

function startTimerCron(){
    timerCron()
    interval = setInterval(timerCron, 1000);
}

function pauseTimer(){
    clearInterval(interval);
}

function stopTimer(){
    clearInterval(interval);
    seconds = 0
    minutes = 0;
    document.getElementById('seconds-cron').innerText = "00";
    document.getElementById('minutes-cron').innerText = "00";

}

function timerCron(){
    seconds++
    if(seconds==60){
        minutes++
        seconds = 0
        if(minutes==0){
            stopTimer();
        }
    }
    document.getElementById('seconds-cron').innerText = formatTwoDigits(seconds);
    document.getElementById('minutes-cron').innerText = formatTwoDigits(minutes);
}

function sorteio() {
    const totalSort = document.getElementById('shuffle-input');
   
    const sort = Math.floor((Math.random() * totalSort.value) + 1);

    document.getElementById('shuffle-response').innerHTML = sort;
}