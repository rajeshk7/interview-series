import Message from "./Message";

interface Subscriber {
    onMessage(message: Message): void;
}

export default Subscriber;