const openFeatures = (() => {
    let cards = document.querySelectorAll('.card');
    let pages = document.querySelectorAll('.page');
    let cross = document.querySelectorAll('.page i');

    cards.forEach((card) => {
        card.addEventListener("click", () => {
            // console.log(pages[card.id]);
            pages[card.id].style.display = "block";

        })

    })
    cross.forEach((element, index) => {
        element.addEventListener("click", () => {
            pages[index].style.display = "none";
        })
    })



})()

let form = document.querySelector('.add-task form');
let taskInput = document.querySelector('.add-task form input');
let taskDescription = document.querySelector('.add-task form textarea');
let addTaskBtn = document.querySelector('.add-task-btn');
let important = document.querySelector('#important');
let tasks = document.querySelector('.tasks');
let EmptyAlert = document.querySelector('.alert');
// let clearBtn = document.querySelector('.clear-all-task-btn');

let alltask = []
localStorage.getItem('alltasks') ? alltask=JSON.parse(localStorage.getItem('alltasks')) : console.log('task list is empty');
;


function renderTask() {
    let sum = ''
    alltask.forEach((e,index) => {
        sum += `<div class="task">
                    <div class="text-content">
                    <i class="fa-solid fa-star-of-life ${e.imp}" ></i>
                    <h2>${e.title}</h2>
                    <p>${e.description}</p>
                    </div>
                    <button class="complete-btn" id=${index}>Mark as Done</button>
                    </div>
                    `
                    // console.log(e.imp)
                    // console.log( document.querySelectorAll('task #1 '))
                })

    tasks.innerHTML = sum
    // tasks.innerHTML = sum
    let btnn =document.querySelectorAll('.complete-btn')
    // Add event listeners for complete buttons
    btnn.forEach(btn => {
        btn.addEventListener('click', () => {
            
            alltask.splice(btn.id,1)
            renderTask()
        });
    });
}

renderTask()

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if(taskInput.value.trim().length>0 || taskDescription.value.trim().length>0 ){

   
    alltask.push({ title: taskInput.value.trim().length > 0 ? taskInput.value : "No title available", description: taskDescription.value.trim().length > 0 ? taskDescription.value : " No description available", imp: important.checked })
    // console.log(alltask)
    renderTask()
    taskInput.value = ""
    taskDescription.value = ""
    important.checked = false
    localStorage.setItem('alltasks',JSON.stringify(alltask)) 
    }

    else{

    EmptyAlert.style.opacity = "1";
    setTimeout(() => {
        EmptyAlert.style.opacity = "0";
    }, 3000);
    }

})



// localStorage.clear()
