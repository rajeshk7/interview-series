import ConsoleColors from "../ConsoleColors"

class Vote {
    value: number
    user: Author
    
    constructor(value: number, user: Author)  {
        this.value = value
        this.user = user
    }
}

class Tag {
    id: number;
    name: string;

    constructor(name: string) {
        this.id = this.generateId();
        this.name = name;
    }

    generateId(): number {
        return Math.floor(Math.random() * 1000000);
    } 
}

class Commenet {
    id: number;
    content: string;
    author: Author;
    creationDate: Date;

    constructor(content: string, author: Author) {
        this.id = this.generateId();
        this.content = content;
        this.author = author;
        this.creationDate = new Date();
    }

    generateId(): number {
        return Math.floor(Math.random() * 1000);
    }
}

interface Votable {
    vote(value: number, user: Author): any;
    getVoteCount(): number;
}

interface Commentable {
    addComment(comment: Commenet): any;
    getComments(): Commenet[]
}

class Author {
    private static QUESTION_REPUTATION = 5;
    private static ANSWER_REPUTATION = 10;
    private static COMMENT_REPUTATION = 2;

   id: number;
   username: string;
   email: string;
   reputation: number;
   questions: Question[];
   answers: Answer[];
   comments: Commenet[];

    constructor(id: number, username: string, email: string) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.reputation = 0;
        this.questions = [];
        this.answers = [];
        this.comments = [];
    }

    askQuestion(title: string, content: string, tags: string[]): Question {
        const question = new Question(title, content, this, tags)
        this.questions.push(question)
        this.updateReputation(Author.QUESTION_REPUTATION)
        return question
    }

    answerQuestion(question: Question, content: string): Answer {
        const answer = new Answer(content, this)
        this.answers.push(answer)
        question.answers.push(answer)
        this.updateReputation(Author.ANSWER_REPUTATION)
        return answer
    }

    addComment(commentable: Commentable, content: string): Commenet {
        const comment = new Commenet(content, this);
        this.comments.push(comment);
        commentable.addComment(comment);
        this.updateReputation(Author.COMMENT_REPUTATION);
        return comment;
    }

    updateReputation(value: number) {
        this.reputation += value;
        if(this.reputation < 0) {
            this.reputation = 0;
        }
    }
}

class Question implements Commentable, Votable {
    id: number;
    title: string;
    content: string;
    author: Author;
    creationDate: Date;
    answers:Answer[];
    comments:Commenet[];
    votes: Vote[];
    tags: Tag[];

    constructor(title: string, content: string, author: Author, tags: string[]) {
        this.id = Math.floor(Math.random() * 1000);
        this.title = title;
        this.content = content;
        this.author = author;
        this.creationDate = new Date();
        this.answers = [];
        this.comments = [];
        this.votes = [];
        this.tags = [];
        for( let tag of tags) {
            this.tags.push(new Tag(tag));
        }
    }

    addComment(comment: Commenet) {
        if(this.comments.includes(comment)) {
            console.log("Comment already added")
            return
        }
        this.comments.push(comment)
    }

    getComments(): Commenet[] {
        return this.comments
    }

    vote(value: number, user: Author) {
        this.votes.filter(votes => votes.user != user)
        this.votes.push(new Vote(value, user))
        // Update reputation
    }

    getVoteCount(): number {
        return this.votes.length
    }
}

class Answer implements Commentable, Votable {
    id: number;
    content: string;
    author: Author;
    creationDate: Date;
    comments:Commenet[];
    votes: Vote[];
    isAccepted: Boolean

    constructor(content: string, author: Author) {
        this.id = Math.floor(Math.random() * 1000);
        this.content = content;
        this.author = author;
        this.creationDate = new Date();
        this.comments = [];
        this.votes = [];
        this.isAccepted = false
    }

    addComment(comment: Commenet) {
        if(this.comments.includes(comment)) {
            console.log("Comment already added")
            return
        }
        this.comments.push(comment)
    }

    getComments(): Commenet[] {
        return this.comments
    }

    vote(value: number, user: Author) {
        this.votes.filter(votes => votes.user != user)
        this.votes.push(new Vote(value, user))
        // Update reputation
    }

    getVoteCount(): number {
        return this.votes.length
    }

    markAsAccepted()    {
        if(this.isAccepted) {
            console.log("Already accepted")
            return
        }
        this.isAccepted = true
        // Update reputation
    }
}

class StackOverflow {
    private users: Map<number, Author>;
    private questions: Map<number, Question>;
    private tags: Map<string, Tag>;
    private answers: Map<number, Answer>;

    constructor() {
        this.users = new Map();
        this.questions = new Map();
        this.tags = new Map();
        this.answers = new Map();
    }

    createUser(username: string, email: string): Author {
        const id = this.users.size + 1
        const user = new Author(id, username, email);
        this.users.set(id, user);
        return user;
    }

    askQuestion(title: string, content: string, author: Author, tags: string[]): Question {
        const question = author.askQuestion(title, content, tags)
        this.questions.set(question.id, question);
        for ( let tag of question.tags) {
            this.tags.set(tag.name, tag);
        }
        return question
    }

    answerQuestion(question: Question, content: string, author: Author): Answer {
        const answer = author.answerQuestion(question, content);
        this.answers.set(answer.id, answer);
        return answer;
    }

    addComment(commentable: Commentable, content: string, author: Author): Commenet {
        return author.addComment(commentable, content);
    }

    voteQuestion(user: Author, question: Question, value: number): void {
        question.vote(value, user);
    }

    voteAnswer(user: Author, answer: Answer, value: number): void {
        answer.vote(value, user);
    }

    acceptAnswer(answer: Answer): void {
        answer.markAsAccepted();
    }

    searchQuestions(query: string): Question[] {
        const result: Question[] = [];
        for (let question of this.questions.values()) {
            if (question.title.includes(query) || question.content.includes(query)) {
                result.push(question);
            }
        }
        return result;
    }

    searchQuestionsByTag(tagName: string): Question[] {
        const result: Question[] = [];
        for (let question of this.questions.values()) {
            for (let tag of question.tags) {
                if (tag.name === tagName) {
                    result.push(question);
                }
            }
        }
        return result;
    }

    getQuestionsByUser(user: Author): Question[] {
        const result: Question[] = [];
        for (let question of this.questions.values()) {
            if (question.author.id === user.id) {
                result.push(question);
            }
        }
        return result;
    }
}

const system = new StackOverflow();

const alice = system.createUser("Alice", "abc@xyz")
const bob = system.createUser("Bob", "def@xyz")
const charlie = system.createUser("Charlie", "ghi@xyz")

const javaQuestion = system.askQuestion("Java", "What is Java?", alice, ["Java", "OOP"])
const bonAnswer = system.answerQuestion(javaQuestion, "Java is a programming language", bob)

system.addComment(bonAnswer, "This is a good answer", charlie)
system.addComment(bonAnswer, "This is a bad answer", alice)

system.voteQuestion(bob, javaQuestion, 1)
system.voteAnswer(charlie, bonAnswer, 1)

system.acceptAnswer(bonAnswer)

const javaScriptQuestion = system.askQuestion("JavaScript", "What is JavaScript?", bob, ["JavaScript", "Web"])
const aliveAnswer = system.answerQuestion(javaScriptQuestion, "JavaScript is a programming language", alice)

system.addComment(aliveAnswer, "This is a good answer", charlie)
system.voteAnswer(alice, aliveAnswer, 1)
system.voteQuestion(charlie, javaScriptQuestion, 1)

console.log(ConsoleColors.fgBrightMagenta + "Question " + javaQuestion.title + ConsoleColors.reset);
console.log(ConsoleColors.fgCyan + "Content " + javaQuestion.content + ConsoleColors.reset);
console.log(ConsoleColors.fgYellow + "Asked by " + javaQuestion.author.username + ConsoleColors.reset);
console.log(ConsoleColors.fgGreen + "Votes " + javaQuestion.getVoteCount() + ConsoleColors.reset);
console.log(ConsoleColors.fgBlue + "Comments " + javaQuestion.getComments().length + ConsoleColors.reset);
console.log(ConsoleColors.fgMagenta + "Tags " + javaQuestion.tags.map(tag => tag.name).join(", ") + ConsoleColors.reset);
console.log(ConsoleColors.fgBrightCyan + "Answer " + bonAnswer.content + ConsoleColors.reset);
console.log(ConsoleColors.fgYellow + "Answered by " + bonAnswer.author.username + ConsoleColors.reset);
console.log(ConsoleColors.fgGreen + "Votes " + bonAnswer.getVoteCount() + ConsoleColors.reset);
console.log(ConsoleColors.fgBlue + "Comments " + bonAnswer.getComments().length + ConsoleColors.reset);

console.log(ConsoleColors.fgBrightWhite + "User reputation" + ConsoleColors.reset);
console.log(ConsoleColors.fgBrightRed + alice.username + " " + alice.reputation + ConsoleColors.reset);
console.log(ConsoleColors.fgBrightGreen + bob.username + " " + bob.reputation + ConsoleColors.reset);
console.log(ConsoleColors.fgBrightBlue + charlie.username + " " + charlie.reputation + ConsoleColors.reset);

console.log(ConsoleColors.fgBrightMagenta + "Search results for Java" + ConsoleColors.reset);
const results = system.searchQuestions("Java");
results.forEach(question => {
    console.log(ConsoleColors.fgCyan + " => " + question.content + ConsoleColors.reset);
});