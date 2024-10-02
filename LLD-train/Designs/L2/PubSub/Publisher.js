"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Publisher = /** @class */ (function () {
    function Publisher() {
        this.topics = new Set();
    }
    Publisher.prototype.registerTopic = function (topic) {
        this.topics.add(topic);
    };
    Publisher.prototype.publish = function (topicName, message) {
        if (!this.topics.has(topicName)) {
            console.log("Topic not found");
        }
        else {
            this.topics.forEach(function (topic) {
                if (topic.getName() === topicName.getName()) {
                    topic.publish(message);
                }
            });
        }
    };
    return Publisher;
}());
exports.default = Publisher;
