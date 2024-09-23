"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Answer_1 = __importDefault(require("./Answer"));
const Question_1 = __importDefault(require("./Question"));
const User_1 = __importDefault(require("./User"));
class StackOverflow {
    constructor() {
        this.users = new Map();
        this.questions = new Map();
        this.tags = new Map();
        this.answers = new Map();
    }
    createUser(username, email) {
        const id = this.users.size + 1;
        const user = new User_1.default(id, username, email);
        this.users.set(id, user);
        return user;
    }
    askQuestion(title, content, author, tags) {
        const question = new Question_1.default(title, content, author, tags);
        this.questions.set(question.getId(), question);
        for (let tag of question.getTags()) {
            this.tags.set(tag.getName(), tag);
        }
        return question;
    }
    answerQuestion(question, content, author) {
        const answer = new Answer_1.default(content, author, question);
        this.answers.set(answer.getId(), answer);
        return answer;
    }
    addComment(commentable, content, author) {
        return author.addComment(commentable, content);
    }
    voteQuestion(user, question, value) {
        question.vote(user, value);
    }
    voteAnswer(user, answer, value) {
        answer.vote(user, value);
    }
    acceptAnswer(answer) {
        answer.maskAsAccepted();
    }
    searchQuestions(query) {
        const result = [];
        for (let question of this.questions.values()) {
            if (question.getTitle().includes(query) || question.getContent().includes(query)) {
                result.push(question);
            }
        }
        return result;
    }
    searchQuestionsByTag(tagName) {
        const result = [];
        for (let question of this.questions.values()) {
            for (let tag of question.getTags()) {
                if (tag.getName() === tagName) {
                    result.push(question);
                }
            }
        }
        return result;
    }
    getQuestionsByUser(user) {
        const result = [];
        for (let question of this.questions.values()) {
            if (question.getAuthor().getId() === user.getId()) {
                result.push(question);
            }
        }
        return result;
    }
}
exports.default = StackOverflow;
