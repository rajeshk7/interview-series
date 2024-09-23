import Comment from "./Comment";

interface Commentable {
    addComment(comment: Comment): void;
    getComments(): Comment[];
}

export default Commentable;