/* Your code here */
//select
const todoinput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todolist = document.querySelector(".todo-list");
//event listener
todoButton.addEventListener("click",addtodo);
todolist.addEventListener('click',deleteCheck);
//func
function addtodo(event){
    //prevent ff submit
    event.preventDefault();
    //todo div
    const tododiv = document.createElement("div");
    tododiv.classList.add("todo");
    //cre li
    const newtodo = document.createElement("li");
    if (todoinput.value == "") {
        alert("คุณยังไม่ได้ใส่ to do list")
      } else {
    newtodo.innerText=todoinput.value;
    newtodo.classList.add("todo-item");
    tododiv.appendChild(newtodo);
    //check mark butt
    const completedbutton = document.createElement("button");
    completedbutton.innerHTML ='<i class="fas fa-check"></i>';
    completedbutton.classList.add("complete-btn");
    tododiv.appendChild(completedbutton);
     //check delete butt
     const deletebutton = document.createElement("button");
     deletebutton.innerHTML ='<i class="fas fa-trash"></i>';
     deletebutton.classList.add("trash-btn");
     tododiv.appendChild(deletebutton);
     //append to list
     todolist.appendChild(tododiv);
     //clear input task
     todoinput.value = "";
      }
}

function deleteCheck(e){
    console.log(e.target);
    const item = e.target;
    //delete todo
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        todo.remove();
    }
    //check mark
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed")
    }
}
