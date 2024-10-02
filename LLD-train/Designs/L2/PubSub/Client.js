"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Topic_1 = require("./Topic");
var Message_1 = require("./Message");
var Publisher_1 = require("./Publisher");
var PrintSubscriber_1 = require("./PrintSubscriber");
var topic1 = new Topic_1.default('topic1');
var topic2 = new Topic_1.default('topic2');
var printSubscriber1 = new PrintSubscriber_1.default('printSubscriber1');
var printSubscriber2 = new PrintSubscriber_1.default('printSubscriber2');
var printSubscriber3 = new PrintSubscriber_1.default('printSubscriber3');
var publisher1 = new Publisher_1.default();
var publisher2 = new Publisher_1.default();
publisher1.registerTopic(topic1);
publisher2.registerTopic(topic2);
topic1.addSubscriber(printSubscriber1);
topic1.addSubscriber(printSubscriber2);
topic2.addSubscriber(printSubscriber3);
topic2.addSubscriber(printSubscriber2);
publisher1.publish(topic1, new Message_1.default('message1'));
publisher2.publish(topic2, new Message_1.default('message2'));
publisher2.publish(topic2, new Message_1.default('message3'));
publisher2.publish(topic2, new Message_1.default('message4'));
topic1.removeSubscriber(printSubscriber1);
publisher1.publish(topic1, new Message_1.default('message5'));
publisher1.publish(topic2, new Message_1.default('message6'));
