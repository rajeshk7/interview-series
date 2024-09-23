class Tag {
    private id: number;
    private name: string;

    constructor(name: string) {
        this.id = this.generateId();
        this.name = name;
    }

    generateId(): number {
        return Math.floor(Math.random() * 1000000);
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

}

export default Tag;