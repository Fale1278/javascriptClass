const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");
const filterBtns = document.querySelectorAll("[data-filter]");
const clearCompletedBtn = document.getElementById("clearCompleted");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all";

function saveTasks(){
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

function displayTasks(){
    list.innerHTML = "";

    let filteredTasks = tasks;

    if(currentFilter === "active"){
        filteredTasks = tasks.filter (t => !t.completed)
    }

    if(currentFilter === "completed"){
        filteredTasks = tasks.filter (t => t.completed)
    }

    filteredTasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task.text;

        if(task.completed){
            li.classList.add("completed")
        }

        li.addEventListener("click", () =>{
            task.completed = !task.completed;
            saveTasks();
            displayTasks();
        });

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";

        editBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            const newText = prompt("Edit Task", task.text);
            if(newText){
                task.text = newText;
                saveTasks();
                displayTasks();
            }
        });

        const delBtn = document.createElement("button");
        delBtn.textContent = "X";

        delBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            tasks.splice(tasks.indexOf(task), 1);
            saveTasks();
            displayTasks();
        });

        li.appendChild(editBtn);
        li.appendChild(delBtn);
        list.appendChild(li)
    });
}

addBtn.addEventListener("click", () =>{
        if(input.value.trim() === "") return;

        tasks.push({
            text: input.value,
            completed: false
        });

        input.value = "";
        saveTasks();
        displayTasks();
    });

    input.addEventListener("keypress", (e) => {
        if(e.key === "Enter"){
            addBtn.click();
        }
    });

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            currentFilter = btn.dataset.filter;
            displayTasks();
        });
    });

    clearCompletedBtn.addEventListener("click", () => {
        tasks = tasks.filter(t => !t.completed);
        saveTasks();
        displayTasks();
    });