"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student = /** @class */ (function () {
    function Student(builder) {
        this.name = builder.name;
        this.age = builder.age;
        this.rollNo = builder.rollNo;
        this.fatherName = builder.fatherName;
        this.motherName = builder.motherName;
        this.subjects = builder.subjects;
    }
    Student.prototype.getStudentDetails = function () {
        return "Name: ".concat(this.name, ", Age: ").concat(this.age, ", Roll No: ").concat(this.rollNo, ", Father's Name: ").concat(this.fatherName, ", Mother's Name: ").concat(this.motherName, ", Subjects: ").concat(this.subjects);
    };
    return Student;
}());
exports.default = Student;
