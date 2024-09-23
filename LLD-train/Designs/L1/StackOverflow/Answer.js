"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Vote_1 = __importDefault(require("./Vote"));
class Answer {
    constructor(content, author, question) {
        this.id = this.generateId();
        this.content = content;
        this.author = author;
        this.question = question;
        this.isAccepted = false;
        this.creationDate = new Date();
        this.comments = [];
        this.votes = [];
    }
    vote(user, value) {
        if (value != -1 && value != 1) {
            console.log("\u001B[91m" /* Color.fgBrightRed */ + "Invalid vote value." + "\u001B[0m" /* Color.reset */);
            return;
        }
        this.votes = this.votes.filter(vote => vote.getUser().getId() != user.getId());
        this.votes.push(new Vote_1.default(user, value));
        this.author.updateReputation(value * 10);
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
    maskAsAccepted() {
        if (this.isAccepted) {
            console.log("\u001B[91m" /* Color.fgBrightRed */ + "Answer is already accepted." + "\u001B[0m" /* Color.reset */);
            return;
        }
        this.isAccepted = true;
        this.author.updateReputation(15);
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
    getQuestion() {
        return this.question;
    }
    getCreationDate() {
        return this.creationDate;
    }
    getVotes() {
        return this.votes;
    }
    getIsAccepted() {
        return this.isAccepted;
    }
}
exports.default = Answer;
