"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Question_1 = __importDefault(require("./Question"));
const Answer_1 = __importDefault(require("./Answer"));
const Comment_1 = __importDefault(require("./Comment"));
class User {
    constructor(id, username, email) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.reputation = 0;
        this.questions = [];
        this.answers = [];
        this.comments = [];
    }
    askQuestion(title, content, tags) {
        const question = new Question_1.default(title, content, this, tags);
        this.questions.push(question);
        this.updateReputation(User.QUESTION_REPUTATION);
        return question;
    }
    answerQuestion(question, content) {
        const answer = new Answer_1.default(content, this, question);
        this.answers.push(answer);
        question.addAnswer(answer);
        this.updateReputation(User.ANSWER_REPUTATION);
        return answer;
    }
    addComment(commentable, content) {
        const comment = new Comment_1.default(content, this);
        this.comments.push(comment);
        commentable.addComment(comment);
        this.updateReputation(User.COMMENT_REPUTATION);
        return comment;
    }
    // Should be synchronized in Java
    updateReputation(value) {
        this.reputation += value;
        if (this.reputation < 0) {
            this.reputation = 0;
        }
    }
    getId() {
        return this.id;
    }
    getUsername() {
        return this.username;
    }
    getEmail() {
        return this.email;
    }
    getReputation() {
        return this.reputation;
    }
}
User.QUESTION_REPUTATION = 5;
User.ANSWER_REPUTATION = 10;
User.COMMENT_REPUTATION = 2;
exports.default = User;
