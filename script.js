let inputs = document.getElementById("input");
let timeInput = document.getElementById("time");
let text = document.querySelector(".text");

function Add() {
    if (inputs.value === "") {
        alert("Please enter a task");
    } else if (timeInput.value === "") {
        alert("Please enter a due time");
    } else {
        let newTask = document.createElement("ul");

        let taskContent = document.createElement("div");
        taskContent.className = "task-content";

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "checkBtn";
        checkbox.addEventListener('change', function() {
            toggleTaskCompletion(newTask, checkbox.checked);
        });
        taskContent.appendChild(checkbox);

        let taskText = document.createElement("span");
        taskText.textContent = inputs.value;
        taskContent.appendChild(taskText);

        let taskDueDate = document.createElement("span");
        taskDueDate.className = "due-timing";
        taskDueDate.textContent = ` (Timing: ${timeInput.value})`;
        taskContent.appendChild(taskDueDate);

        newTask.appendChild(taskContent);

        let trashIcon = document.createElement("i");
        trashIcon.className = "fa-solid fa-trash";
        trashIcon.addEventListener('click', function() {
            newTask.remove();
        });
        newTask.appendChild(trashIcon);

        text.appendChild(newTask);
        inputs.value = "";
        timeInput.value = "";
    }
}

function toggleTaskCompletion(task, isChecked) {
    if (isChecked) {
        task.classList.add('checked');
    } else {
        task.classList.remove('checked');
    }
}

document.getElementById('addBtn').addEventListener('click', Add);

document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        Add();
    }
});
