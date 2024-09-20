import StudentBuilder from "./StudentBuilder";

class Student {
    name: string;
    age: number;
    rollNo: number;
    fatherName: string;
    motherName: string;
    subjects: string[];

    constructor(builder: StudentBuilder) {
        this.name = builder.name;
        this.age = builder.age;
        this.rollNo = builder.rollNo;
        this.fatherName = builder.fatherName;
        this.motherName = builder.motherName;
        this.subjects = builder.subjects;
    }

    getStudentDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Roll No: ${this.rollNo}, Father's Name: ${this.fatherName}, Mother's Name: ${this.motherName}, Subjects: ${this.subjects}`;
    }

}

export default Student;