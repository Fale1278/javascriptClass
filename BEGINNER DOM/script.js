

// let para = document.getElementById("para");


// para.textContent  = "Changing text content."
// paraTwo.textContent = "Also changing the second paragraph."


// para.style.backgroundColor = "red";
// paraTwo.style.color = "blue";

// para.style.fontSize = "30px";


// let p = document.createElement("p");
// p.textContent = "I am a new paragraph.";
// document.body.appendChild(p);

// paraTwo.remove()

// Events - Basically what users do.

// let btn = document.getElementById("btn");

// btn.addEventListener("click", function(){
//     alert("Button CLicked")
// })

// let btn = document.getElementById("btn");
// let paraTwo = document.querySelector(".paraTwo");

// btn.addEventListener("click", function(){
//     paraTwo.textContent = "Button Clicked..."
// })

let count  = 0;

let counter = document.getElementById("counter");
let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function(){
    count++;
    counter.textContent = count;
})