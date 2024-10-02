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


