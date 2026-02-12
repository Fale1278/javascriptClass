// function task1(){
//     console.log("Task1 Started...");

//     let start = Date.now();
//     let delay = 5000;
//     let end = start + delay;

//     console.log("Task1 executing...")

//     while(Date.now() <= end){
        
//     }
//     console.log("Task1 Completed...")
// }

// function task2(){
//     console.log("Task2 Started...");

//     let start = Date.now();
//     let delay = 3000;
//     let end = start + delay;

//     console.log("Task2 executing...")

//     while(Date.now() <= end){
        
//     }
//     console.log("Task2 Completed...")
// }

// function task3(){
//     console.log("Task3 Started...");

//     let start = Date.now();
//     let delay = 2000;
//     let end = start + delay;

//     console.log("Task3 executing...")

//     while(Date.now() <= end){
        
//     }
//     console.log("Task3 Completed...")
// }

// task1();
// task2();
// task3();


function task1(){
    return new Promise((resolve) => {
        console.log("Task1 Starting")
        console.log("Task1 Executing...")

        setTimeout(() => {
            console.log("Task1 completed...")
            resolve();
        }, 5000);
    });
}

function task2(){
    return new Promise((resolve) => {
        console.log("Task2 Starting")
        console.log("Task2 Executing...")

        setTimeout(() => {
            console.log("Task2 completed...")
            resolve();
        }, 3000);
    })
}

function task3(){
    return new Promise((resolve) => {
        console.log("Task3 Starting")
        console.log("Task3 Executing...")

        setTimeout(() => {
            console.log("Task3 completed...")
            resolve();
        }, 3000);
    })
}

async function runTasks() {
    await task1();
    await task2();
    await task3();

    console.log("All Task done")
}

runTasks();
