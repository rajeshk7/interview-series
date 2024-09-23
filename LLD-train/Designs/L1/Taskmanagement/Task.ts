import TaskStatus from "./TaskStatus";
import User from "./User";

class Task {
    private id: string;
    private title: string;
    private description: string;
    private date: Date;
    private status: TaskStatus;
    private assignedUser: User;
    private priority: number;
    
    constructor(id: string, title: string, description: string, date: Date, assignedUser: User, priority: number) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.date = date;
        this.status = TaskStatus.PENDING;
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

    setStatus(status: TaskStatus) {
        this.status = status;
    }

    setPriority(priority: number) {
        this.priority = priority;
    }

    setAssignedUser(user: User) {
        this.assignedUser = user;
    }

    setTitle(title: string) {
        this.title = title;
    }

    setDescription(description: string) {
        this.description = description;
    }

    setDate(date: Date) {
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

export default Task;