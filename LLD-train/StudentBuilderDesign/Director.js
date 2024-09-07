"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EngineeringStudentBuilder_1 = require("./EngineeringStudentBuilder");
var MBAStudentBuilder_1 = require("./MBAStudentBuilder");
var Director = /** @class */ (function () {
    function Director(studentBuilder) {
        this.studentBuilder = studentBuilder;
    }
    Director.prototype.createStudent = function () {
        if (this.studentBuilder instanceof MBAStudentBuilder_1.default)
            return this.createMBAStudent();
        else if (this.studentBuilder instanceof EngineeringStudentBuilder_1.default)
            return this.createEngineeringStudent();
        else
            return this.createMedicalStudent();
    };
    Director.prototype.createMBAStudent = function () {
        return this.studentBuilder.setRollNo(1).setAge(28).setFatherName('Mr. X').setMotherName('Mrs. X').setSubjects().setName('Raj').build();
    };
    Director.prototype.createEngineeringStudent = function () {
        return this.studentBuilder.setRollNo(2).setAge(20).setFatherName('Mr. X').setMotherName('Mrs. X').setSubjects().setName('Rahul').build();
    };
    Director.prototype.createMedicalStudent = function () {
        return this.studentBuilder.setRollNo(3).setAge(26).setFatherName('Mr. X').setMotherName('Mrs. X').setSubjects().setName('Simran').build();
    };
    return Director;
}());
exports.default = Director;
