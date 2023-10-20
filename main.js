let milisecond = document.getElementById("milisecond");
let second = document.getElementById("second");
let minute = document.getElementById("minute");
let hour = document.getElementById("hour");

let milisecond_value = milisecond.value;
let second_value = second.value;
let minute_value = minute.value;
let hour_value = hour.value;

milisecond_value = 0;
second_value = 0;
minute_value = 0;
hour_value = 0;


let countUp = function(){
  
  let milisecond_value0 = "0" + milisecond_value;
  
  milisecond.innerHTML = milisecond_value0.slice(-2);
  second.innerHTML = second_value;
  minute.innerHTML = minute_value;
  hour.innerHTML = hour_value;
  
  milisecond_value++;
  
  if(milisecond_value== 100){
    milisecond_value = 0;
    second_value ++;
  }
  if(second_value == 60){
    second_value = 0;
    minute_value ++;
  }
  if(minute_value == 60) {
  minute_value = 0;
  hour ++;
  }
  
};


let timer;
let start_button = document.getElementById("start_button");
let stop_button = document.getElementById("stop_button");
let time_html = document.getElementById("time");

function start(){
  timer = setInterval(countUp,10);
  start_button.disabled = true;
  stop_button.disabled = false;
  time_html.style.backgroundColor = "#ead6ff";
  }
  
function stop(){
  clearInterval(timer);
  start_button.disabled = false;
  stop_button.disabled = true;
  time_html.style.backgroundColor = "#fff";
  }

function reset(){
  milisecond_value = 0;
  second_value = 0;
  minute_value = 0;
  hour_value = 0;
  milisecond.innerHTML = 0;
  second.innerHTML = 0;
  minute.innerHTML = 0;
  hour.innerHTML = 0;
  stop_button.disabled = false;
}