'use strict';
let ball = document.querySelector('#ball'),
    cloud = document.querySelector('#cloud'),
    start = document.querySelector('.start'),
    reset = document.querySelector('.reset'),
    stop = document.querySelector('.stop'),
count = 0;
let interval;
let movie = ()=>{
    interval = requestAnimationFrame(movie);
    count++;
    ball.style.position = 'absolute';
    cloud.style.position = 'absolute';
    if(count < 350){
        ball.style.top = count + 'px';
        cloud.style.left = count*2 + 'px';
    } else if (count < 400){
        cloud.style.left = count*2 + 'px';
    } else {
        cancelAnimationFrame(interval);
    }
    console.log(count);
};

start.addEventListener('click', () => {
    interval = requestAnimationFrame(movie);
    start.style.display = 'none';
    stop.style.display = 'inline-block'; 
});

stop.addEventListener('click', () => {
    cancelAnimationFrame(interval);
    start.style.display = 'inline-block';
    stop.style.display = 'none'; 
});

reset.addEventListener('click', () => {
    count = 0;
    ball.style.top = 0 + 'px';
    cloud.style.left = 0 + 'px';
});