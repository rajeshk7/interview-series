"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TaskStatus_1 = __importDefault(require("./TaskStatus"));
class Task {
    constructor(id, title, description, date, assignedUser, priority) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.date = date;
        this.status = TaskStatus_1.default.PENDING;
        this.assignedUser = assignedUser;
        this.priority = priority;
    }
    getId() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
    getDescription() {
        return this.description;
    }
    getDate() {
        return this.date;
    }
    getStatus() {
        return this.status;
    }
    getAssignedUser() {
        return this.assignedUser;
    }
    getPriority() {
        return this.priority;
    }
    setStatus(status) {
        this.status = status;
    }
    setPriority(priority) {
        this.priority = priority;
    }
    setAssignedUser(user) {
        this.assignedUser = user;
    }
    setTitle(title) {
        this.title = title;
    }
    setDescription(description) {
        this.description = description;
    }
    setDate(date) {
        this.date = date;
    }
    printTask() {
        console.log(`Task ID: ${this.id}`);
        console.log(`Title: ${this.title}`);
        console.log(`Description: ${this.description}`);
        console.log(`Date: ${this.date}`);
        console.log(`Status: ${this.status}`);
        console.log(`Priority: ${this.priority}`);
        console.log(`Assigned User: ${this.assignedUser.getName()}`);
    }
}
exports.default = Task;
