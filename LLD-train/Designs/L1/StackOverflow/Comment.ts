import User from "./User";

class Comment {
    private id: number;
    private content: string;
    private author: User;
    private creationDate: Date;

    constructor(content: string, author: User) {
        this.id = this.generateId();
        this.content = content;
        this.author = author;
        this.creationDate = new Date();
    }

    generateId(): number {
        return Math.floor(Math.random() * 1000);
    }

    getId(): number {
        return this.id;
    }

    getContent(): string {
        return this.content;
    }

    getAuthor(): User {
        return this.author;
    }

    getCreationDate(): Date {
        return this.creationDate;
    }
}

export default Comment;