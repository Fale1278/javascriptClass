// setTimeout function

// setTimeout(function() {
//     document.getElementById("text").textContent = "Thank you for waiting";
// }, 3000)

// setTimeout(function(){
//     window.location.href = "http://upwork.com/"
// },5000)

// SetInterval function
// setInterval(function(){
//     console.log("Time counting")
// }, 3000)

// let count = 0
// setInterval(() => {
//     count++
//     document.getElementById("counter").textContent = count;
// }, 1000);

// let count = 0
// const intervalId = setInterval(function(){
//     count++
//     document.getElementById("counter").textContent = count;

//     if(count === 10){
//         clearInterval(intervalId);
//         document.getElementById("stop").textContent = "Counting has stopped."
//     }
// }, 1000)

// let timer = 10;

// const intervalId  = setInterval(function(){
//     timer--;
//     document.getElementById("timer").textContent = timer;

//     if(timer === 0){
//         clearInterval(intervalId);
//         alert("Time Up.")
//     }
// },1000)

let count = 0;
let stopBtn = document.getElementById("stopBtn");

const intervalId = setInterval(function(){
    count++
    document.getElementById("counter").textContent = count;
}, 1000)

stopBtn.addEventListener("click", function(){
    clearInterval(intervalId);
    document.getElementById("stop").textContent = "Counter Stopped."
})

