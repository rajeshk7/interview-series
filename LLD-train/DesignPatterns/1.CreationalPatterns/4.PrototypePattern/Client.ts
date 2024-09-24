import Student from "./Student";

const student_1 = new Student(20, "John", 1);
const student_2 = student_1.clone();

console.log(student_1);
console.log(student_2);