"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Comment {
    constructor(content, author) {
        this.id = this.generateId();
        this.content = content;
        this.author = author;
        this.creationDate = new Date();
    }
    generateId() {
        return Math.floor(Math.random() * 1000);
    }
    getId() {
        return this.id;
    }
    getContent() {
        return this.content;
    }
    getAuthor() {
        return this.author;
    }
    getCreationDate() {
        return this.creationDate;
    }
}
exports.default = Comment;
