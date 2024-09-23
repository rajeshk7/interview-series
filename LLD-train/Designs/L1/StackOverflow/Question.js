"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Vote_1 = __importDefault(require("./Vote"));
const Tag_1 = __importDefault(require("./Tag"));
class Question {
    constructor(title, content, author, tags) {
        this.id = this.generateId();
        this.title = title;
        this.content = content;
        this.author = author;
        this.creationDate = new Date();
        this.answers = [];
        this.comments = [];
        this.votes = [];
        this.tags = [];
        for (let tag of tags) {
            this.tags.push(new Tag_1.default(tag));
        }
    }
    addAnswer(answer) {
        if (this.answers.includes(answer)) {
            console.log("\u001B[91m" /* ConsoleColors.fgBrightRed */ + "Answer is already added." + "\u001B[0m" /* ConsoleColors.reset */);
            return;
        }
        this.answers.push(answer);
    }
    vote(user, value) {
        if (value != -1 && value != 1) {
            console.log("\u001B[91m" /* ConsoleColors.fgBrightRed */ + "Invalid vote value." + "\u001B[0m" /* ConsoleColors.reset */);
            return;
        }
        this.votes = this.votes.filter(vote => vote.getUser().getId() != user.getId());
        this.votes.push(new Vote_1.default(user, value));
        this.author.updateReputation(value * 5);
    }
    getVoteCount() {
        return this.votes.reduce((acc, vote) => acc + vote.getValue(), 0);
    }
    addComment(comment) {
        this.comments.push(comment);
    }
    getComments() {
        return this.comments;
    }
    generateId() {
        return Math.floor(Math.random() * 1000);
    }
    getId() {
        return this.id;
    }
    getTitle() {
        return this.title;
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
    getTags() {
        return this.tags;
    }
}
exports.default = Question;
