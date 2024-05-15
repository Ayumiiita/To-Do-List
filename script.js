document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const deleteAllBtn = document.getElementById('deleteAllBtn');
    const taskList = document.getElementById('taskList');


    function addDeleteButton(taskItem) {
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        deleteButton.addEventListener('click', function() {
            taskItem.remove();
        });
        taskItem.appendChild(deleteButton);
    }

    function addCheckbox(taskItem) {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                taskItem.style.textDecoration = 'line-through';
            } else {
                taskItem.style.textDecoration = 'none';
            }
        });
        taskItem.prepend(checkbox);
    }


    addTaskBtn.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            const deleteButton = document.createElement('button');
            const checkbox = document.createElement('input');
            li.classList.add('task-item');
            deleteButton.classList.add('delete-btn');
            deleteButton.textContent = 'Delete';
            checkbox.type = 'checkbox';
            li.textContent = taskText;
            li.prepend(checkbox);
            li.appendChild(deleteButton);
            taskList.appendChild(li);
            taskInput.value = '';
        }
    });

    // Eliminar todo el contenido de la lista
    deleteAllBtn.addEventListener('click', function() {
        taskList.innerHTML = ''; 
    });

    //Para que no se pueda eliminar una tarea si está marcada como completada.
    taskList.addEventListener('change', function(event) {
        if (event.target.type === 'checkbox') {
            const taskItem = event.target.parentNode;
            const deleteButton = taskItem.querySelector('.delete-btn');
            if (event.target.checked) {
                taskItem.style.textDecoration = 'none';
                deleteButton.disabled = true; // Desactiva el botón "Eliminar"
                deleteButton.classList.add('disabled'); // Agrega la clase CSS 'disabled'r"
            } else {
                taskItem.style.textDecoration = 'none';
                deleteButton.disabled = false; // Habilita el botón "Eliminar"
                deleteButton.classList.remove('disabled'); // Remueve la clase CSS 'disabled'
            }
        }
    });

    taskList.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-btn')) {
            event.target.parentNode.remove();
        }
    });

});

