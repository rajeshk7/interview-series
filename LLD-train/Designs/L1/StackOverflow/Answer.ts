import User from "./User";
import Vote from "./Vote";
import Votable from "./Votable";
import Comment from "./Comment";
import Question from "./Question";
import Commentable from "./Commentable";
import Color from "../../../ConsoleColors"

class Answer implements Commentable, Votable {
    private id: number;
    private content: string;
    private author: User;
    private question: Question;
    private isAccepted: boolean;
    private creationDate: Date;
    private comments: Comment[];
    private votes: Vote[];

    constructor(content: string, author: User, question: Question) {
        this.id = this.generateId();
        this.content = content;
        this.author = author;
        this.question = question;
        this.isAccepted = false;
        this.creationDate = new Date();
        this.comments = [];
        this.votes = [];
    }

    vote(user: User, value: number) {
        if(value != -1 && value != 1) {
            console.log(Color.fgBrightRed + "Invalid vote value." + Color.reset);
            return;
        }
        this.votes = this.votes.filter(vote => vote.getUser().getId() != user.getId());
        this.votes.push(new Vote(user, value));
        this.author.updateReputation(value * 10);
    }

    getVoteCount(): number {
        return this.votes.reduce((acc, vote) => acc + vote.getValue(), 0);
    }

    addComment(comment: Comment): void {
        this.comments.push(comment);
    }

    getComments(): Comment[] {
        return this.comments;
    }

    maskAsAccepted(): void {    
        if(this.isAccepted) {
            console.log(Color.fgBrightRed + "Answer is already accepted." + Color.reset);
            return;
        }
        this.isAccepted = true;
        this.author.updateReputation(15);
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

    getQuestion(): Question {
        return this.question;
    }

    getCreationDate(): Date {
        return this.creationDate;
    }

    getVotes(): Vote[] {
        return this.votes;
    }

    getIsAccepted(): boolean {
        return this.isAccepted;
    }
}

export default Answer;