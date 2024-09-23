class User  {
    private name: string;
    private email: string;
    private id: string;

    constructor(name: string, email: string, id: string) {
        this.name = name;
        this.email = email;
        this.id = id;
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    getId() {
        return this.id;
    }
}

export default User;