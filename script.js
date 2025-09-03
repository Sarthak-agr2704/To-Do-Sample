<html>
<head>
    <title>To-do List</title>
</head>
<body>
    <h1 align="Center">To-do List</h1>
    <div align='Center'>
    <button onclick="window.location.href='index.html'">Main Menu</button>
    </div>
    <br>
    <marquee>Get Better Everyday! Manage Tasks! Succeed. </marquee>
    <section>
    <div align="Center">
    <h2>Tasks</h2>
    <input id="taskInput" placeholder="Enter a new task">
    <button onclick="addTask()">Add Task</button>
    <ul id="taskList"></ul>
    </div>
    </section>
    <script>
        function addTask() {
            const taskInput = document.getElementById('taskInput');
            const taskList = document.getElementById('taskList');
            const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const listItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.onchange = function() {
            if (checkbox.checked) {
                taskSpan.style.textDecoration = 'line-through';
                taskSpan.style.fontStyle = 'italic';
                taskSpan.style.color = 'gray';
            } else {
                taskSpan.style.textDecoration = 'none';
                taskSpan.style.fontStyle = 'normal';
                taskSpan.style.color = 'inherit';
            }
        };
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌'; 
        deleteButton.onclick = function() {
            taskList.removeChild(listItem);
        };
        listItem.appendChild(checkbox);
        listItem.appendChild(taskSpan);
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
        taskInput.value = '';
            }
        }
    </script>
</body>
</html>
