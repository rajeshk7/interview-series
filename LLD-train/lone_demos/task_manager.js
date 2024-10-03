"use strict";
var TaskStatus;
(function (TaskStatus) {
    TaskStatus[TaskStatus["PENDING"] = 0] = "PENDING";
    TaskStatus[TaskStatus["IN_PROGRESS"] = 1] = "IN_PROGRESS";
    TaskStatus[TaskStatus["COMPLETE"] = 2] = "COMPLETE";
})(TaskStatus || (TaskStatus = {}));
class User {
    constructor(name, email, id) {
        this.name = name;
        this.email = email;
        this.id = id;
    }
}
class Task {
    constructor(id, title, description, date, assignedUser, priority) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.date = date;
        this.status = TaskStatus.PENDING;
        this.assignedUser = assignedUser;
        this.priority = priority;
    }
    printTask() {
        console.log(`Task ID: ${this.id}`);
        console.log(`Title: ${this.title}`);
        console.log(`Description: ${this.description}`);
        console.log(`Date: ${this.date}`);
        console.log(`Status: ${this.status}`);
        console.log(`Priority: ${this.priority}`);
        console.log(`Assigned User: ${this.assignedUser.name}`);
    }
}
class TaskManager {
    constructor() {
        this.tasks = new Map();
        this.userTasks = new Map();
    }
    static getInstance() {
        if (this.instance == null)
            this.instance = new TaskManager();
        return this.instance;
    }
    createTask(task) {
        this.tasks.set(task.id, task);
        this.assignTaskTouser(task.id, task.assignedUser.id);
    }
    updateTask(task) {
        const oldTask = this.tasks.get(task.id);
        this.tasks.set(task.id, task);
        this.unAssignTaskFromUser(oldTask === null || oldTask === void 0 ? void 0 : oldTask.id, oldTask === null || oldTask === void 0 ? void 0 : oldTask.assignedUser.id);
        this.assignTaskTouser(task.id, task.assignedUser.id);
    }
    searchTask(keyWord) {
        const result = [];
        for (const value of this.tasks.values())
            if (value.title.includes(keyWord) || value.description.includes(keyWord))
                result.push(value);
        return result;
    }
    markAsCompleted(taskId) {
        for (const value of this.tasks.values())
            if (value.id == taskId)
                value.status = TaskStatus.COMPLETE;
    }
    filterTasks(status, startDate, endDate, priority) {
        const result = [];
        for (const value of this.tasks.values())
            if (value.status == status && value.priority == priority && startDate <= value.date && endDate >= value.date)
                result.push(value);
        return result;
    }
    deleteTask(taskId) {
        const task = this.tasks.get(taskId);
        this.tasks.delete(taskId);
        this.unAssignTaskFromUser(taskId, task === null || task === void 0 ? void 0 : task.assignedUser.id);
    }
    assignTaskTouser(taskId, userId) {
        const task = this.tasks.get(taskId);
        const userTasks = this.userTasks.get(userId) || [];
        userTasks.push(task);
        this.userTasks.set(userId, userTasks);
    }
    unAssignTaskFromUser(taskId, userId) {
        const userTasks = this.userTasks.get(userId) || [];
        const updatedTasks = userTasks.filter(task => task.id !== taskId);
        this.userTasks.set(userId, updatedTasks);
    }
    getTaskHistory(userId) {
        return this.userTasks.get(userId) || [];
    }
}
const taskManager = TaskManager.getInstance();
const user1 = new User("user_1", "user@emial", "user_1");
const user2 = new User("user_2", "user@emial", "user_2");
const task1 = new Task("1", "Task 1", "Task 1 description", new Date(), user1, 1);
const task2 = new Task("2", "Task 2", "Task 2 description", new Date(), user2, 2);
const task3 = new Task("3", "Task 3", "Task 3 description", new Date(), user1, 3);
const task4 = new Task("4", "Task 4", "Task 4 description", new Date(), user2, 4);
taskManager.createTask(task1);
taskManager.createTask(task2);
taskManager.createTask(task3);
taskManager.createTask(task4);
task2.description = "Task 2 updated description";
taskManager.updateTask(task2);
const tasks = taskManager.searchTask("Task");
console.log("----------- Searched Tasks: ");
for (const task of tasks) {
    task.printTask();
}
taskManager.markAsCompleted("2");
const filteredTasks = taskManager.filterTasks(TaskStatus.IN_PROGRESS, new Date(0), new Date(), 1);
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
