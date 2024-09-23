"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("./User"));
const Task_1 = __importDefault(require("./Task"));
const TaskManager_1 = __importDefault(require("./TaskManager"));
const TaskStatus_1 = __importDefault(require("./TaskStatus"));
const taskManager = TaskManager_1.default.getInstance();
const user1 = new User_1.default("user_1", "user@emial", "user_1");
const user2 = new User_1.default("user_2", "user@emial", "user_2");
const task1 = new Task_1.default("1", "Task 1", "Task 1 description", new Date(), user1, 1);
const task2 = new Task_1.default("2", "Task 2", "Task 2 description", new Date(), user2, 2);
const task3 = new Task_1.default("3", "Task 3", "Task 3 description", new Date(), user1, 3);
const task4 = new Task_1.default("4", "Task 4", "Task 4 description", new Date(), user2, 4);
taskManager.createTask(task1);
taskManager.createTask(task2);
taskManager.createTask(task3);
taskManager.createTask(task4);
task2.setDescription("Task 2 updated description");
taskManager.updateTask(task2);
const tasks = taskManager.searchTask("Task");
console.log("----------- Searched Tasks: ");
for (const task of tasks) {
    task.printTask();
}
taskManager.markAsCompleted("2");
const filteredTasks = taskManager.filterTasks(TaskStatus_1.default.IN_PROGRESS, new Date(0), new Date(), 1);
console.log("----------- Filtered Tasks: ");
for (const task of filteredTasks) {
    task.printTask();
}
const taskHistory = taskManager.getTaskHistory("1");
console.log("----------- Task History: ");
for (const task of taskHistory) {
    task.printTask();
}
taskManager.deleteTask("2");
