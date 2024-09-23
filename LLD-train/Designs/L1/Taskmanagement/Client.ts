import User from "./User";
import Task from "./Task";
import TaskManager from "./TaskManager";
import TaskStatus from "./TaskStatus";

const taskManager = TaskManager.getInstance();

const user1 = new User("user_1", "user@emial", "user_1")
const user2 = new User("user_2", "user@emial", "user_2")

const task1 = new Task("1", "Task 1", "Task 1 description", new Date(), user1, 1);
const task2 = new Task("2", "Task 2", "Task 2 description", new Date(), user2, 2);
const task3 = new Task("3", "Task 3", "Task 3 description", new Date(), user1, 3);
const task4 = new Task("4", "Task 4", "Task 4 description", new Date(), user2, 4);

taskManager.createTask(task1);
taskManager.createTask(task2);
taskManager.createTask(task3);
taskManager.createTask(task4);

task2.setDescription("Task 2 updated description");
taskManager.updateTask(task2);

const tasks = taskManager.searchTask("Task");
console.log("----------- Searched Tasks: ");
for(const task of tasks) {
    task.printTask();
}

taskManager.markAsCompleted("2");

const filteredTasks = taskManager.filterTasks(TaskStatus.IN_PROGRESS, new Date(0), new Date(), 1);
console.log("----------- Filtered Tasks: ");
for(const task of filteredTasks) {
    task.printTask();
}

const taskHistory = taskManager.getTaskHistory("1");
console.log("----------- Task History: ");
for(const task of taskHistory) {
    task.printTask();
}

taskManager.deleteTask("2");