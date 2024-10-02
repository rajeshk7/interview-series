import Topic from './Topic'
import Message from './Message'
import Publisher from './Publisher'
import PrintSubscriber from './PrintSubscriber'

const topic1 = new Topic('topic1')
const topic2 = new Topic('topic2')

const printSubscriber1 = new PrintSubscriber('printSubscriber1')
const printSubscriber2 = new PrintSubscriber('printSubscriber2')
const printSubscriber3 = new PrintSubscriber('printSubscriber3')

const publisher1 = new Publisher()
const publisher2 = new Publisher()

publisher1.registerTopic(topic1)
publisher2.registerTopic(topic2)

topic1.addSubscriber(printSubscriber1)
topic1.addSubscriber(printSubscriber2)
topic2.addSubscriber(printSubscriber3)
topic2.addSubscriber(printSubscriber2)

publisher1.publish(topic1, new Message('message1'))
publisher2.publish(topic2, new Message('message2'))
publisher2.publish(topic2, new Message('message3'))
publisher2.publish(topic2, new Message('message4'))

topic1.removeSubscriber(printSubscriber1)

publisher1.publish(topic1, new Message('message5'))
publisher1.publish(topic2, new Message('message6'))