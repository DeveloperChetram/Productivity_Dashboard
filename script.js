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

const todo = ()=>{

let form = document.querySelector('.add-task form');
let taskInput = document.querySelector('.add-task form input');
let taskDescription = document.querySelector('.add-task form textarea');
let addTaskBtn = document.querySelector('.add-task-btn');
let important = document.querySelector('#important');
let tasks = document.querySelector('.tasks');
let EmptyAlert = document.querySelector('.alert');
// let clearBtn = document.querySelector('.clear-all-task-btn');
// localStorage.clear()
let alltask = []
let completedTask=[]
localStorage.getItem('alltask') ? alltask=JSON.parse(localStorage.getItem('alltask')) : console.log('task list is empty');
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
            completedTask.push(alltask[btn.id])
            alltask.splice(btn.id,1); 
                localStorage.setItem('alltask', JSON.stringify(alltask));
            renderTask();   
            
            console.log(completedTask)
                    
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
    localStorage.setItem('alltask',JSON.stringify(alltask)) 
    }

    else{

    EmptyAlert.style.opacity = "1";
    setTimeout(() => {
        EmptyAlert.style.opacity = "0";
    }, 3000);
    }

})


}
todo()
// localStorage.clear()

let hours = Array.from({length:18},(_,idx)=>{
   
})

let dayPlanData= JSON.parse(localStorage.getItem('dayPlanData'))  ||{}

let daySum=''


hours.forEach((_,idx)=>{
    daySum+= `      <div class="planner-div">
                   
                        <input type="text" id=${idx} value="${dayPlanData[idx] !==undefined ? dayPlanData[idx] : ''  }" placeholder="Enter your routine">
                             <span>${6+idx}:00 - ${7+idx}:00</span>
                    </div>`
})
// localStorage.clear()
document.querySelector('.daily-container').innerHTML=daySum

let allInputs=document.querySelectorAll('.planner-div input')
allInputs.forEach((e)=>{
    e.addEventListener('input',(e)=>{
        // console.log(e.target.id)
        dayPlanData[e.target.id]=e.target.value
        localStorage.setItem('dayPlanData',JSON.stringify(dayPlanData))
        console.log(dayPlanData)
    })
})