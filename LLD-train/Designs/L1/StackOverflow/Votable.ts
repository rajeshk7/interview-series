import User from "./User";

interface Votable {
    vote(user: User, value: number): void;
    getVoteCount(): number;
}

export default Votable;