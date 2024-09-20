import Director from "./Director";
import MBAStudentBuilder from "./MBAStudentBuilder";
import EngineeringStudentBuilder from "./EngineeringStudentBuilder";
import Color from '../../../ConsoleColors'
import MedicalStudentBuilder from "./MedialStudentBuilder";

const MBADirector = new Director(new MBAStudentBuilder());
const engineeringDirector = new Director(new EngineeringStudentBuilder());
const medicalDirector = new Director(new MedicalStudentBuilder());

const mbaStudent = MBADirector.createStudent();
const engineeringStudent = engineeringDirector.createStudent();
const medicalStudent = medicalDirector.createStudent();

console.log(Color.fgBrightCyan, mbaStudent.getStudentDetails());
console.log(Color.fgBrightMagenta, engineeringStudent.getStudentDetails());
console.log(Color.fgBrightGreen, medicalStudent.getStudentDetails());