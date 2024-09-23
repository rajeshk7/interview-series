"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vote {
    constructor(user, value) {
        this.user = user;
        this.value = value;
    }
    getUser() {
        return this.user;
    }
    getValue() {
        return this.value;
    }
}
exports.default = Vote;
