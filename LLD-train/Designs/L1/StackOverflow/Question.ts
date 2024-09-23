import Commentable from "./Commentable";
import Votable from "./Votable";
import User from "./User";
import Vote from "./Vote";
import Tag from "./Tag";
import Comment from "./Comment";
import Answer from "./Answer";
import ConsoleColors from "../../../ConsoleColors";

class Question implements Commentable, Votable {
    private id: number;
    private title: string;
    private content: string;
    private author: User;
    private creationDate: Date;
    private answers:Answer[];
    private comments:Comment[];
    private votes: Vote[];
    private tags: Tag[];

    constructor(title: string, content: string, author: User, tags: string[]) {
        this.id = this.generateId();
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

    addAnswer(answer: Answer): void {
        if(this.answers.includes(answer)) {
            console.log(ConsoleColors.fgBrightRed + "Answer is already added." + ConsoleColors.reset);
            return;
        }
        this.answers.push(answer);
    }

    vote(user: User, value: number): void {
        if(value != -1 && value != 1) {
            console.log(ConsoleColors.fgBrightRed + "Invalid vote value." + ConsoleColors.reset);
            return;
        }
        this.votes = this.votes.filter(vote => vote.getUser().getId() != user.getId());
        this.votes.push(new Vote(user, value));
        this.author.updateReputation(value * 5);
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

    generateId(): number {
        return Math.floor(Math.random() * 1000);
    }

    getId(): number {
        return this.id;
    }

    getTitle(): string {
        return this.title;
    }

    getContent(): string {
        return this.content;
    }

    getAuthor(): User {
        return this.author;
    }

    getCreationDate(): Date {
        return this.creationDate;
    }

    getTags(): Tag[] {
        return this.tags;
    }
}

export default Question;