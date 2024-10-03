interface Subscriber {
    onMessage(message: string): void
}

class Topic {
    name: string
    subscribers: Set<Subscriber>

    constructor(name: string)   {
        this.name = name
        this.subscribers = new Set()
    }

    addSubscriber(subscriber: Subscriber)   {
        this.subscribers.add(subscriber)
    }

    removeSubscriber(subscriber: Subscriber)    {
        this.subscribers.delete(subscriber)
    }

    publishMessage(message: string) {
        for( const subs of Array.from(this.subscribers))
            subs.onMessage(message)
    } 
}

class Publisher {
    topics: Set<Topic>

    constructor()   {
        this.topics = new Set()
    }

    addTopic(topic: Topic)  {
        this.topics.add(topic)
    }

    removeTopic(topic: Topic)   {
        this.topics.delete(topic)
    }

    publishMessage(topic: Topic, message: string) {
        for( const curTopic of Array.from(this.topics))
            if( topic.name == curTopic.name )
                curTopic.publishMessage(message)
    }
}

class EmailSubscriber implements Subscriber {
    enail: string

    constructor(enail: string)   {
        this.enail = enail
    }

    onMessage(message: string): void {
        console.log("EMAIL ==> sent for message " + message + " to id " + this.enail)
    }
}

class PhoneSubscriber implements Subscriber {
    phoneNo: number

    constructor(number: number) {
        this.phoneNo = number
    }

    onMessage(message: string): void {
        console.log("PHONE MESSAGE ==> sent " + message + " to phone number " + this.phoneNo)
    }
}

const topic1 = new Topic('topic1')
const topic2 = new Topic('topic2')

const emailSubs1 = new EmailSubscriber('printSubscriber1')
const phoneSubs1 = new PhoneSubscriber(1234)
const emailSubs2 = new EmailSubscriber('printSubscriber3')
const phoneSubs2 = new PhoneSubscriber(5678)


const publisher1 = new Publisher()
const publisher2 = new Publisher()

publisher1.addTopic(topic1)
publisher2.addTopic(topic2)

topic1.addSubscriber(emailSubs1)
topic1.addSubscriber(phoneSubs1)

topic2.addSubscriber(emailSubs2)
topic2.addSubscriber(phoneSubs2)
topic2.addSubscriber(emailSubs1)

publisher1.publishMessage(topic1, 'message1')
console.log("\n")

publisher2.publishMessage(topic2, 'message2')
publisher2.publishMessage(topic2, 'message3')
publisher2.publishMessage(topic2, 'message4')

topic1.removeSubscriber(emailSubs1)
console.log("\n")

publisher1.publishMessage(topic1, 'message5')
publisher1.publishMessage(topic2, 'message6')