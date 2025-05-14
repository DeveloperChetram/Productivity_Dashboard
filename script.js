const openFeatures=(()=>{
    let cards = document.querySelectorAll('.card');
let span = document.querySelector('.card span');
let pages = document.querySelectorAll('.page');
let cross = document.querySelectorAll('.page i');

cards.forEach((card)=>{
    card.addEventListener("click",()=>{
        // console.log(pages[card.id]);
       pages[card.id].style.display = "block";

    })
    
})
cross.forEach((element, index)=>{
    element.addEventListener("click",()=>{
         pages[index].style.display = "none";
    })
})
 
   

})()

let taskInput = document.querySelector('.add-task form input');
let taskDescription = document.querySelector('.add-task form textarea');
let addTaskBtn = document.querySelector('.add-task-btn');
let important = document.querySelector('#important');

addTaskBtn.addEventListener('click',()=>{
    console.log(taskInput.value)
})

important.addEventListener('click',()=>{
    console.log(important.checked)
})