"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student_1 = require("./Student");
var student_1 = new Student_1.default(20, "John", 1);
var student_2 = student_1.clone();
console.log(student_1);
console.log(student_2);
