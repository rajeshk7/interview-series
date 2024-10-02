class Message {
    message: string;

    constructor(message: string) {
        this.message = message;
    }

    getContent(): string {
        return this.message;
    }
}

export default Message;