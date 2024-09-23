import Answer from "./Answer";
import Question from "./Question";
import User from "./User";
import Comment from "./Comment";
import Tag from "./Tag";
import Commentable from "./Commentable";

class StackOverflow {
    private users: Map<number, User>;
    private questions: Map<number, Question>;
    private tags: Map<string, Tag>;
    private answers: Map<number, Answer>;

    constructor() {
        this.users = new Map();
        this.questions = new Map();
        this.tags = new Map();
        this.answers = new Map();
    }

    createUser(username: string, email: string): User {
        const id = this.users.size + 1
        const user = new User(id, username, email);
        this.users.set(id, user);
        return user;
    }

    askQuestion(title: string, content: string, author: User, tags: string[]): Question {
        const question = new Question(title, content, author, tags);
        this.questions.set(question.getId(), question);
        for ( let tag of question.getTags()) {
            this.tags.set(tag.getName(), tag);
        }
        return question;
    }

    answerQuestion(question: Question, content: string, author: User): Answer {
        const answer = new Answer(content, author, question);
        this.answers.set(answer.getId(), answer);
        return answer;
    }

    addComment(commentable: Commentable, content: string, author: User): Comment {
        return author.addComment(commentable, content);
    }

    voteQuestion(user: User, question: Question, value: number): void {
        question.vote(user, value);
    }

    voteAnswer(user: User, answer: Answer, value: number): void {
        answer.vote(user, value);
    }

    acceptAnswer(answer: Answer): void {
        answer.maskAsAccepted();
    }

    searchQuestions(query: string): Question[] {
        const result: Question[] = [];
        for (let question of this.questions.values()) {
            if (question.getTitle().includes(query) || question.getContent().includes(query)) {
                result.push(question);
            }
        }
        return result;
    }

    searchQuestionsByTag(tagName: string): Question[] {
        const result: Question[] = [];
        for (let question of this.questions.values()) {
            for (let tag of question.getTags()) {
                if (tag.getName() === tagName) {
                    result.push(question);
                }
            }
        }
        return result;
    }

    getQuestionsByUser(user: User): Question[] {
        const result: Question[] = [];
        for (let question of this.questions.values()) {
            if (question.getAuthor().getId() === user.getId()) {
                result.push(question);
            }
        }
        return result;
    }
}

export default StackOverflow;