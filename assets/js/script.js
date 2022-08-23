
// SELECTORES
const inputTask = document.getElementById("input-box"),
    tasksList = document.getElementById("tasks-list"),
    tasksTotal = document.getElementById("total-tasks"),
    tasksDone = document.getElementById("done-tasks");
const tasks = [
    {
        id: 1001,
        name: "Demo tarea 1",
        done: true,
    },
    {
        id: 1002,
        name: "Demo tarea 2",
        done: false
    },
    {
        id: 1003,
        name: "Demo tarea 3",
        done: false
    }];

//VALIDACIÓN
function validateInput(text){
    if (text == ""){
        alert("Debes ingresar un texto")
    }
    else if(text.length < 5){
        alert("La tarea debe tener una longitud mínina de 5 caracteres")
    }
    return text != "" && text.length >= 5;
}

//RENDER TEMPLATE
function renderTemplate(){
    let html = "";
    let total = 0,
        done = 0;
    tasks.forEach(task =>{
        if(task.done){
            done++;
            var style = "line-through";
        }
        html += `
        <li class="task ${style}"> 
            <p>${task.id}</p>
            <p>${task.name}</p>
            <p>${task.done}</p>
            <div class="iconos">
                <i class="fa-solid fa-circle-check" onclick="updateTask(${task.id})"></i>
                <i class="fa-solid fa-trash" onclick="deleteTask(${task.id})"></i>
            </div>
        </li>  
        `
        total++
    })
    tasksTotal.innerHTML = total;
    tasksList.innerHTML = html;
    tasksDone.innerHTML = done;
    console.log(tasksDone.innerHTML)
}

//ADD TASK 
function addTask(taskName){
    const newTask = {
        id: 1000 + (tasks.length) + 1,
        name: taskName,
        done: false, 
    }
    tasks.push(newTask);
    renderTemplate();
}

// DELETE
function deleteTask(id){
    const index = tasks.findIndex(task => task.id === id);
    console.log(index);
    tasks.splice(index, 1);
    renderTemplate();
}

// UPDATE
function updateTask(id){
    const index = tasks.findIndex(task => task.id === id);
    if (tasks[index].done){
        tasks[index].done = false 
    }else{
        tasks[index].done = true 
    }
    renderTemplate();
}


document.getElementById("btn-add").addEventListener("click", () =>{
if(validateInput(inputTask.value)){
    addTask(inputTask.value)
    }
});

renderTemplate();




