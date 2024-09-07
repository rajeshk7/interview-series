"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student_1 = require("./Student");
var StudentBuilder = /** @class */ (function () {
    function StudentBuilder() {
        var _this = this;
        this.setRollNo = function (rollNo) {
            _this.rollNo = rollNo;
            return _this;
        };
        this.setFatherName = function (fatherName) {
            _this.fatherName = fatherName;
            return _this;
        };
        this.setMotherName = function (motherName) {
            _this.motherName = motherName;
            return _this;
        };
        this.setName = function (name) {
            _this.name = name;
            return _this;
        };
        this.setAge = function (age) {
            _this.age = age;
            return _this;
        };
        this.build = function () {
            return new Student_1.default(_this);
        };
    }
    return StudentBuilder;
}());
exports.default = StudentBuilder;
