import User from "./User";

class Vote {
    private user: User;
    private value: number;

    constructor(user: User, value: number) {
        this.user = user;
        this.value = value;
    }

    getUser(): User {
        return this.user;
    }

    getValue(): number {
        return this.value;
    }
}

export default Vote;