import Task from "./Task";
import TaskStatus from "./TaskStatus";

class TaskManager {
    private static instance: TaskManager;
    private tasks: Map<string, Task>;
    private userTasks: Map<string, Task[]>;

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

    createTask(task: Task) {
        this.tasks.set(task.getId(), task);
        this.assignTaskTouser(task.getId(), task.getAssignedUser().getId());
    }

    updateTask(task: Task) {
        const prevTask = this.tasks.get(task.getId()) as Task;
        if(prevTask !== null) {
            prevTask.setPriority(task.getPriority());
            prevTask.setStatus(task.getStatus());
            prevTask.setDate(task.getDate());
            prevTask.setDescription(task.getDescription());
            prevTask.setTitle(task.getTitle());
            const oldUserId = prevTask.getAssignedUser().getId();
            const newUserId = task.getAssignedUser().getId();
            if(oldUserId !== newUserId) {
                this.unAssignTaskFromUser(task.getId(), oldUserId);
                this.assignTaskTouser(task.getId(), newUserId);
                prevTask.setAssignedUser(task.getAssignedUser());
            }
        }
    }

    searchTask(keyWord: string) {
        let result :Task[] = []
        for( const task of this.tasks.values()) {
            if(task.getTitle().includes(keyWord) || task.getDescription().includes(keyWord)) {
                result.push(task);
            }
        }
        return result;
    }

    markAsCompleted(taskId: string) {
        const task = this.tasks.get(taskId) as Task;
        // Should be sync in java
        task.setStatus(TaskStatus.COMPLETED);
    }

    filterTasks(status: TaskStatus, startDate: Date, endDate: Date, priority: number) {
        let result :Task[] = []
        for( const task of this.tasks.values()) {
            if(task.getStatus() === status && task.getDate() >= startDate && task.getDate() <= endDate && task.getPriority() === priority) {
                result.push(task);
            }
        }
        return result;
    }

    deleteTask(taskId: string) {
        const task = this.tasks.get(taskId) as Task;
        this.unAssignTaskFromUser(taskId, task.getAssignedUser().getId());
        this.tasks.delete(taskId);
    }

    assignTaskTouser(taskId: string, userId: string) {
        const task = this.tasks.get(taskId) as Task;
        const userTasks = this.userTasks.get(userId) || [];
        userTasks.push(task);
        this.userTasks.set(userId, userTasks);
    }

    unAssignTaskFromUser(taskId: string, userId: string) {
        const userTasks = this.userTasks.get(userId) || [];
        const updatedTasks = userTasks.filter(task => task.getId() !== taskId);
        this.userTasks.set(userId, updatedTasks);
    }

    getTaskHistory(userId: string) {
        return this.userTasks.get(userId) || [];
    }
}

export default TaskManager;