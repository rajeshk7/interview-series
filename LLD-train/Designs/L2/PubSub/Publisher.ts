import Message from "./Message";
import Topic from "./Topic";

class Publisher {

    private topics: Set<Topic>;

    constructor() {
        this.topics = new Set();
    }

    registerTopic(topic: Topic): void {
        this.topics.add(topic);
    }

    publish(topicName: Topic, message: Message): void {
        if(!this.topics.has(topicName)) {
            console.log("Topic not found");
        }
        else {
            this.topics.forEach(topic => {
                if(topic.getName() === topicName.getName()) {
                    topic.publish(message);
                }
            });
        }
    }

}

export default Publisher;