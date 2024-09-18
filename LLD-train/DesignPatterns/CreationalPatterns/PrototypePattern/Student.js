"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student = /** @class */ (function () {
    function Student(age, name, rollNumber) {
        this.age = age;
        this.name = name;
        this.rollNumber = rollNumber;
    }
    Student.prototype.clone = function () {
        return new Student(this.age, this.name, this.rollNumber);
    };
    return Student;
}());
exports.default = Student;
