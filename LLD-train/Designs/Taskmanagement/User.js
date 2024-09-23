"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(name, email, id) {
        this.name = name;
        this.email = email;
        this.id = id;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getId() {
        return this.id;
    }
}
exports.default = User;
