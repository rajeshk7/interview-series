"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TaskStatus_1 = __importDefault(require("./TaskStatus"));
class TaskManager {
    constructor() {
        this.tasks = new Map();
        this.userTasks = new Map();
    }
    // Has to be synchronized in javas
    static getInstance() {
        if (!TaskManager.instance) {
            TaskManager.instance = new TaskManager();
        }
        return TaskManager.instance;
    }
    createTask(task) {
        this.tasks.set(task.getId(), task);
        this.assignTaskTouser(task.getId(), task.getAssignedUser().getId());
    }
    updateTask(task) {
        const prevTask = this.tasks.get(task.getId());
        if (prevTask !== null) {
            prevTask.setPriority(task.getPriority());
            prevTask.setStatus(task.getStatus());
            prevTask.setDate(task.getDate());
            prevTask.setDescription(task.getDescription());
            prevTask.setTitle(task.getTitle());
            const oldUserId = prevTask.getAssignedUser().getId();
            const newUserId = task.getAssignedUser().getId();
            if (oldUserId !== newUserId) {
                this.unAssignTaskFromUser(task.getId(), oldUserId);
                this.assignTaskTouser(task.getId(), newUserId);
                prevTask.setAssignedUser(task.getAssignedUser());
            }
        }
    }
    searchTask(keyWord) {
        let result = [];
        for (const task of this.tasks.values()) {
            if (task.getTitle().includes(keyWord) || task.getDescription().includes(keyWord)) {
                result.push(task);
            }
        }
        return result;
    }
    markAsCompleted(taskId) {
        const task = this.tasks.get(taskId);
        // Should be sync in java
        task.setStatus(TaskStatus_1.default.COMPLETED);
    }
    filterTasks(status, startDate, endDate, priority) {
        let result = [];
        for (const task of this.tasks.values()) {
            if (task.getStatus() === status && task.getDate() >= startDate && task.getDate() <= endDate && task.getPriority() === priority) {
                result.push(task);
            }
        }
        return result;
    }
    deleteTask(taskId) {
        const task = this.tasks.get(taskId);
        this.unAssignTaskFromUser(taskId, task.getAssignedUser().getId());
        this.tasks.delete(taskId);
    }
    assignTaskTouser(taskId, userId) {
        const task = this.tasks.get(taskId);
        const userTasks = this.userTasks.get(userId) || [];
        userTasks.push(task);
        this.userTasks.set(userId, userTasks);
    }
    unAssignTaskFromUser(taskId, userId) {
        const userTasks = this.userTasks.get(userId) || [];
        const updatedTasks = userTasks.filter(task => task.getId() !== taskId);
        this.userTasks.set(userId, updatedTasks);
    }
    getTaskHistory(userId) {
        return this.userTasks.get(userId) || [];
    }
}
exports.default = TaskManager;
