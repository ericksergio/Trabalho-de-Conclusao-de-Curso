
// function startTimer(duration, displayM, displayS) {
//     minutes = document.querySelector('#minutes');
//     seconds = document.querySelector('#seconds');
//     var timer = duration, minutes, seconds;
//     setInterval(function () {
//         minutes = parseInt(timer / 60, 10);
//         seconds = parseInt(timer % 60, 10);

//         minutes = minutes < 10 ? "0" + minutes : minutes; //Se minutes < 10 acrescenta no display o 0
//         seconds = seconds < 10 ? "0" + seconds : seconds; //Se seconds < 10 acrescenta no display o 0
//         displayM.textContent = minutes;
//         displayS.textContent = seconds;
//         if (--timer < 0) {
//             timer = duration;
//         }
//     }, 1000);
// }
// window.onclick = function () {
//     var duration = 60 * 5; // Converter para segundos
//         displayM = document.querySelector('#minutes'); // selecionando o timer
//         displayS = document.querySelector('#seconds'); // selecionando o timer
//     startTimer(duration, displayM, displayS); // iniciando o timer
// };

// function restartTimer(duration, displayM, displayS) {
//     document.location.reload(false);
// }

// const buttonEl = document.querySelector('button-start');
// buttonEl.addEventListener('onlick', startTimer);
     
var seconds = 0;
var minutes = 0;

var interval;

function formatTwoDigits(digit){
    if(digit<10){
        return '0' + digit
    }else{
        return digit
    }
}

function startTimer(){
    timer()
    interval = setInterval(timer, 1000);
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

function timer(){
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
