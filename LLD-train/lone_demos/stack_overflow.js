"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vote {
    constructor(value, user) {
        this.value = value;
        this.user = user;
    }
}
class Tag {
    constructor(name) {
        this.id = this.generateId();
        this.name = name;
    }
    generateId() {
        return Math.floor(Math.random() * 1000000);
    }
}
class Commenet {
    constructor(content, author) {
        this.id = this.generateId();
        this.content = content;
        this.author = author;
        this.creationDate = new Date();
    }
    generateId() {
        return Math.floor(Math.random() * 1000);
    }
}
class Author {
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
        const question = new Question(title, content, this, tags);
        this.questions.push(question);
        this.updateReputation(Author.QUESTION_REPUTATION);
        return question;
    }
    answerQuestion(question, content) {
        const answer = new Answer(content, this);
        this.answers.push(answer);
        question.answers.push(answer);
        this.updateReputation(Author.ANSWER_REPUTATION);
        return answer;
    }
    addComment(commentable, content) {
        const comment = new Commenet(content, this);
        this.comments.push(comment);
        commentable.addComment(comment);
        this.updateReputation(Author.COMMENT_REPUTATION);
        return comment;
    }
    updateReputation(value) {
        this.reputation += value;
        if (this.reputation < 0) {
            this.reputation = 0;
        }
    }
}
Author.QUESTION_REPUTATION = 5;
Author.ANSWER_REPUTATION = 10;
Author.COMMENT_REPUTATION = 2;
class Question {
    constructor(title, content, author, tags) {
        this.id = Math.floor(Math.random() * 1000);
        this.title = title;
        this.content = content;
        this.author = author;
        this.creationDate = new Date();
        this.answers = [];
        this.comments = [];
        this.votes = [];
        this.tags = [];
        for (let tag of tags) {
            this.tags.push(new Tag(tag));
        }
    }
    addComment(comment) {
        if (this.comments.includes(comment)) {
            console.log("Comment already added");
            return;
        }
        this.comments.push(comment);
    }
    getComments() {
        return this.comments;
    }
    vote(value, user) {
        this.votes.filter(votes => votes.user != user);
        this.votes.push(new Vote(value, user));
        // Update reputation
    }
    getVoteCount() {
        return this.votes.length;
    }
}
class Answer {
    constructor(content, author) {
        this.id = Math.floor(Math.random() * 1000);
        this.content = content;
        this.author = author;
        this.creationDate = new Date();
        this.comments = [];
        this.votes = [];
        this.isAccepted = false;
    }
    addComment(comment) {
        if (this.comments.includes(comment)) {
            console.log("Comment already added");
            return;
        }
        this.comments.push(comment);
    }
    getComments() {
        return this.comments;
    }
    vote(value, user) {
        this.votes.filter(votes => votes.user != user);
        this.votes.push(new Vote(value, user));
        // Update reputation
    }
    getVoteCount() {
        return this.votes.length;
    }
    markAsAccepted() {
        if (this.isAccepted) {
            console.log("Already accepted");
            return;
        }
        this.isAccepted = true;
        // Update reputation
    }
}
class StackOverflow {
    constructor() {
        this.users = new Map();
        this.questions = new Map();
        this.tags = new Map();
        this.answers = new Map();
    }
    createUser(username, email) {
        const id = this.users.size + 1;
        const user = new Author(id, username, email);
        this.users.set(id, user);
        return user;
    }
    askQuestion(title, content, author, tags) {
        const question = author.askQuestion(title, content, tags);
        this.questions.set(question.id, question);
        for (let tag of question.tags) {
            this.tags.set(tag.name, tag);
        }
        return question;
    }
    answerQuestion(question, content, author) {
        const answer = author.answerQuestion(question, content);
        this.answers.set(answer.id, answer);
        return answer;
    }
    addComment(commentable, content, author) {
        return author.addComment(commentable, content);
    }
    voteQuestion(user, question, value) {
        question.vote(value, user);
    }
    voteAnswer(user, answer, value) {
        answer.vote(value, user);
    }
    acceptAnswer(answer) {
        answer.markAsAccepted();
    }
    searchQuestions(query) {
        const result = [];
        for (let question of this.questions.values()) {
            if (question.title.includes(query) || question.content.includes(query)) {
                result.push(question);
            }
        }
        return result;
    }
    searchQuestionsByTag(tagName) {
        const result = [];
        for (let question of this.questions.values()) {
            for (let tag of question.tags) {
                if (tag.name === tagName) {
                    result.push(question);
                }
            }
        }
        return result;
    }
    getQuestionsByUser(user) {
        const result = [];
        for (let question of this.questions.values()) {
            if (question.author.id === user.id) {
                result.push(question);
            }
        }
        return result;
    }
}
const system = new StackOverflow();
const alice = system.createUser("Alice", "abc@xyz");
const bob = system.createUser("Bob", "def@xyz");
const charlie = system.createUser("Charlie", "ghi@xyz");
const javaQuestion = system.askQuestion("Java", "What is Java?", alice, ["Java", "OOP"]);
const bonAnswer = system.answerQuestion(javaQuestion, "Java is a programming language", bob);
system.addComment(bonAnswer, "This is a good answer", charlie);
system.addComment(bonAnswer, "This is a bad answer", alice);
system.voteQuestion(bob, javaQuestion, 1);
system.voteAnswer(charlie, bonAnswer, 1);
system.acceptAnswer(bonAnswer);
const javaScriptQuestion = system.askQuestion("JavaScript", "What is JavaScript?", bob, ["JavaScript", "Web"]);
const aliveAnswer = system.answerQuestion(javaScriptQuestion, "JavaScript is a programming language", alice);
system.addComment(aliveAnswer, "This is a good answer", charlie);
system.voteAnswer(alice, aliveAnswer, 1);
system.voteQuestion(charlie, javaScriptQuestion, 1);
console.log("\u001B[95m" /* ConsoleColors.fgBrightMagenta */ + "Question " + javaQuestion.title + "\u001B[0m" /* ConsoleColors.reset */);
console.log("\u001B[36m" /* ConsoleColors.fgCyan */ + "Content " + javaQuestion.content + "\u001B[0m" /* ConsoleColors.reset */);
console.log("\u001B[33m" /* ConsoleColors.fgYellow */ + "Asked by " + javaQuestion.author.username + "\u001B[0m" /* ConsoleColors.reset */);
console.log("\u001B[32m" /* ConsoleColors.fgGreen */ + "Votes " + javaQuestion.getVoteCount() + "\u001B[0m" /* ConsoleColors.reset */);
console.log("\u001B[34m" /* ConsoleColors.fgBlue */ + "Comments " + javaQuestion.getComments().length + "\u001B[0m" /* ConsoleColors.reset */);
console.log("\u001B[35m" /* ConsoleColors.fgMagenta */ + "Tags " + javaQuestion.tags.map(tag => tag.name).join(", ") + "\u001B[0m" /* ConsoleColors.reset */);
console.log("\u001B[96m" /* ConsoleColors.fgBrightCyan */ + "Answer " + bonAnswer.content + "\u001B[0m" /* ConsoleColors.reset */);
console.log("\u001B[33m" /* ConsoleColors.fgYellow */ + "Answered by " + bonAnswer.author.username + "\u001B[0m" /* ConsoleColors.reset */);
console.log("\u001B[32m" /* ConsoleColors.fgGreen */ + "Votes " + bonAnswer.getVoteCount() + "\u001B[0m" /* ConsoleColors.reset */);
console.log("\u001B[34m" /* ConsoleColors.fgBlue */ + "Comments " + bonAnswer.getComments().length + "\u001B[0m" /* ConsoleColors.reset */);
console.log("\u001B[97m" /* ConsoleColors.fgBrightWhite */ + "User reputation" + "\u001B[0m" /* ConsoleColors.reset */);
console.log("\u001B[91m" /* ConsoleColors.fgBrightRed */ + alice.username + " " + alice.reputation + "\u001B[0m" /* ConsoleColors.reset */);
console.log("\u001B[92m" /* ConsoleColors.fgBrightGreen */ + bob.username + " " + bob.reputation + "\u001B[0m" /* ConsoleColors.reset */);
console.log("\u001B[94m" /* ConsoleColors.fgBrightBlue */ + charlie.username + " " + charlie.reputation + "\u001B[0m" /* ConsoleColors.reset */);
console.log("\u001B[95m" /* ConsoleColors.fgBrightMagenta */ + "Search results for Java" + "\u001B[0m" /* ConsoleColors.reset */);
const results = system.searchQuestions("Java");
results.forEach(question => {
    console.log("\u001B[36m" /* ConsoleColors.fgCyan */ + " => " + question.content + "\u001B[0m" /* ConsoleColors.reset */);
});
