let inp = document.querySelector("#input");
let btn = document.querySelector("#btn");
let ul = document.querySelector("ul");

let taskCount = ul.children.length;
let totalTask = document.querySelector("#total");
totalTask.innerText = taskCount;

let taskdone = document.querySelector("#done");
let doneCount = 0;

let idCounter = 1;

btn.addEventListener("click", function(){
    let uniqueId = "checkBox" + idCounter++;

    let item = document.createElement("li");
    let box = document.createElement("INPUT");
    box.setAttribute("type", "checkbox");
    box.setAttribute("id",uniqueId);
    box.classList.add("check");

    let label = document.createElement("label");
    label.classList.add("checkbox-label");
    label.setAttribute("for",uniqueId);

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");

    if(inp.value.trim() !== ""){
        item.classList.add("list");
        item.appendChild(box);
        item.appendChild(label);

        let textNode = document.createTextNode(inp.value);
        item.appendChild(textNode);

        item.appendChild(delBtn);
        ul.appendChild(item);
        taskCount++;
        totalTask.innerText = taskCount;
        
    }else{
        item.remove(); 
        window.alert("please enter task to add");       
    }
    inp.value="";
});

inp.addEventListener("keypress", function(event) {
    if ((event.key === "Enter") && (inp.value.trim() !== "")){
      event.preventDefault();
      document.getElementById("btn").click();
    }
});

ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;

        let checkbox = listItem.querySelector("input[type='checkbox']");
        if (checkbox && checkbox.checked) {
            doneCount--;
            taskdone.innerText = doneCount;
        }
        listItem.remove();
        taskCount--;
        totalTask.innerText = taskCount;
    }
    if (event.target.nodeName == 'INPUT' && event.target.type == 'checkbox'){
        let listItem = event.target.parentElement;
        listItem.style.textDecoration = event.target.checked ? "line-through" : "none";

        doneCount = (event.target.checked)? doneCount + 1 : doneCount - 1;
        taskdone.innerText = doneCount;
    }
})


// function addTask() {
//     const taskInput = document.getElementById('input');
//     const taskList = document.getElementById('taskList');
//     const taskText = taskInput.value.trim();

//     if (taskText === '') return;

//     const taskItem = document.createElement('li');
//     taskItem.className = 'list';
//     taskItem.innerHTML = `
//         <input type="checkbox" onchange="updateTaskStatus(this)">
//         <span class="task-text">${taskText}</span>
//         <button class="delete", onclick="deleteTask(this)">Delete</button>
//     `;

//     taskList.appendChild(taskItem);
//     taskInput.value = '';
//     updateTaskCount();
// }

// taskInput.addEventListener("keypress", function(event) {
//         if ((event.key === "Enter") && (taskText !== "")){
//           event.preventDefault();
//           document.getElementById("btn").click();
//         }
//     });

// function deleteTask(button) {
//     const taskItem = button.parentElement;
//     taskItem.remove();
//     updateTaskCount();
// }

// function updateTaskStatus(checkbox) {
//     const taskItem = checkbox.parentElement;
//     if (checkbox.checked) {
//         taskItem.classList.add('completed');
//     } else {
//         taskItem.classList.remove('completed');
//     }
//     updateTaskCount();
// }

// function updateTaskCount() {
//     const taskList = document.getElementById('taskList');
//     const totalTasks = taskList.children.length;
//     const completedTasks = taskList.querySelectorAll('.list.completed').length;

//     document.getElementById('totalTasks').innerText = `Total task: ${totalTasks}`;
//     document.getElementById('completedTasks').innerText = `Task completed: ${completedTasks}`;
// }

// // Initial count update
// updateTaskCount();