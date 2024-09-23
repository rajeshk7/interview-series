"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Tag {
    constructor(name) {
        this.id = this.generateId();
        this.name = name;
    }
    generateId() {
        return Math.floor(Math.random() * 1000000);
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
}
exports.default = Tag;
