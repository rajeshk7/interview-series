import Question from "./Question";
import Tag from "./Tag";
import Commentable from "./Commentable";
import Answer from "./Answer";
import Comment from "./Comment";

class User  {
    private id: number;
    private username: string;
    private email: string;
    private reputation: number;
    private questions: Question[];
    private answers: Answer[];
    private comments: Comment[];

    private static QUESTION_REPUTATION = 5;
    private static ANSWER_REPUTATION = 10;
    private static COMMENT_REPUTATION = 2;

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
        const question = new Question(title, content, this, tags);
        this.questions.push(question);
        this.updateReputation(User.QUESTION_REPUTATION);
        return question;
    }

    answerQuestion(question: Question, content: string): Answer {
        const answer = new Answer(content, this, question);
        this.answers.push(answer);
        question.addAnswer(answer);
        this.updateReputation(User.ANSWER_REPUTATION);
        return answer;
    }

    addComment(commentable: Commentable, content: string): Comment {
        const comment = new Comment(content, this);
        this.comments.push(comment);
        commentable.addComment(comment);
        this.updateReputation(User.COMMENT_REPUTATION);
        return comment;
    }

    // Should be synchronized in Java
    updateReputation(value: number) {
        this.reputation += value;
        if(this.reputation < 0) {
            this.reputation = 0;
        }
    }
    
    getId(): number {
        return this.id;
    }

    getUsername(): string {
        return this.username;
    }

    getEmail(): string {
        return this.email;
    }

    getReputation(): number {
        return this.reputation;
    }
}

export default User;