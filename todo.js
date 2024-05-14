const tasks =JSON.parse(localStorage.getItem('tasks')) || [];
            function addTask(){
                const taskName = document.querySelector(".task-name-input").value;
                const taskDate = document.querySelector(".date-input").value;
                const task = {
                    name: taskName,
                    date: taskDate
                };
                tasks.push(task);
                viewTasks();
                localStorage.setItem('tasks', JSON.stringify(tasks));
            }

            function viewTasks(){
                document.querySelector(".task-view").innerHTML = getTasks(tasks);
            }

            function getTasks(tasks){
                let tasksHtml = '';
                for(let i = 0; i < tasks.length; i++){
                    const task = tasks[i];
                    tasksHtml+=`
                        <div class = 'taskName'>${task.name}</div>
                        <div class = 'taskDate'>${task.date}</div>
                        <button class = 'delete-button' onclick="
                            deleteTask(${i});
                        ">Delete</button>
                    `;
                }
                return tasksHtml;
            }
            function cleanInput(){
                document.querySelector(".task-name-input").value = '';
                document.querySelector(".date-input").value = '';
            }
            function deleteTask(index){
                tasks.splice(index, 1);
                localStorage.setItem("tasks", JSON.stringify(tasks));
                viewTasks(tasks);
            }
            
            viewTasks();
