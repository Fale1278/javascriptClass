

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

// let count  = 0;

// let counter = document.getElementById("counter");
// let addBtn = document.getElementById("addBtn");
// let subBtn = document.getElementById("subBtn");

// addBtn.addEventListener("click", function(){
//     count++;
//     counter.textContent = count;
// })

// subBtn.addEventListener("click", function(){
//     count--;
//     counter.textContent = count;
// })

// let title = document.getElementById("title");
// let btn = document.getElementById("btn");

// btn.addEventListener("click", function(){
//     title.style.color = "red";
// })

// let btn = document.getElementById("btn")

// btn.addEventListener("click", function(){
//     document.body.style.backgroundColor = "red"
// })

// let info = document.getElementById("info");
// let toggle = document.getElementById("toggle");

// toggle.addEventListener("click", function(){
//     if(info.style.display === "none"){
//         info.style.display = "block";

//     }

//     else{
//         info.style.display = "none";
//     }
// })

// let list = document.getElementById("list");
// let addBtn = document.getElementById("add");

// addBtn.addEventListener("click", function(){
//     let li = document.createElement("li");
//     li.textContent = "New Item";
//     list.appendChild(li);
// });


let login = document.getElementById("login");
let message = document.getElementById("message");

login.addEventListener("click",function(){
    
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    
    if(username === "admin" && password === "123456"){
        message.textContent = "Login Successful...";
        message.style.color = "green"
        message.style.fontStyle = "italic"
    }

    else{
        message.textContent = "Wrong Details...";
        message.style.color = "red"
        message.style.fontStyle = "italic"
    }
});