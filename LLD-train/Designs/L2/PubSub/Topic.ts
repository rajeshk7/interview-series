import Message from "./Message";
import Subscriber from "./Subscriber";

class Topic {
    private name: string;
    private subscribers: Set<Subscriber>;

    constructor(name: string) {
        this.name = name;
        this.subscribers = new Set();
    }

    getName(): string {
        return this.name;
    }

    addSubscriber(subscriber: Subscriber): void {
        this.subscribers.add(subscriber);
    }

    removeSubscriber(subscriber: Subscriber): void {
        this.subscribers.delete(subscriber);
    }

    publish(message: Message): void {
        this.subscribers.forEach(subscriber => subscriber.onMessage(message));
    }
}

export default Topic;