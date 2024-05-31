//1.Define an empty array to store the tasks
// This array will hold all our tasks

let tasks = [];

//2. Function to add a task to the list 
//This function will take a task description and add it too the tasks array 
function addTask (task) {
    //check is the task is not empty 
    if (task) {
        //Push the task to the task array
        tasks.push({description: task, completed: 
            false });
            console.log(`Task added: ${task}`);
    } else {
        //if the task is empty, Shw an error message 
        console.log('task cannot be empty');

    }
}

//3. Function to view all tasks
//This function wil display all tasks in the tasks array 
function viewTasks(){
    //Check if there are any tasks
    if (tasks.length > 0 ) {
        console.log('Here are your tasks:');
        tasks.forEach((task, index) => {
            console.log(`${index +1}. ${task.description} - ${task.completed ?
                'completed' : 'Not Completed' }`);
        });
    } else {
        //If there are no tasks, show a message
        console.log('No tasks found');
    }
}

//4. Function to remove a task by index 
// This function will take an index and remove the corresponding task
function removeTask(index) {
    //check if the index is valid
    if(index >= 0 && index < tasks.length){
        //Remove the task from the task array 
        const removedTask = tasks.splice(index, 1);
       console.log(`Task removed: ${removedTask[0].description}`);
 }
 else {
    // If the index is inalid, show an error message 
    console.log('invalid task index');

 }
}

//Function the mark task as completed 
//This function will take and index and mark the corresponding task as completed
function markTaskAsCompleted (index) {
    //chek if the length is valid 
    if(index >= 0 && index < tasks.length) {
        //mark the task as completed
        tasks[ index ].completed = true;
        console.log(`Task completed:) ${tasks[index].description`};
    } else { 
        //if the index is invalid, show an error message
console.log('invalid task index')
    }
}

//Example Usage:
//Adding tasks 
addTask ('Learn Javascript');

//Viewing tasks
viewTaks();
//Marking a task as completed
markTaskAsCompleted(0);

//Viewing tasks again to see the changes
viewTasks();

//Removing a task
removeTask();

//Viewing tasks one last time
viewTasks();
