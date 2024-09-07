import Student from './Student';

abstract class StudentBuilder {
    name: string;
    age: number;
    rollNo: number;
    fatherName: string;
    motherName: string;
    subjects: string[];

    setRollNo = (rollNo: number): StudentBuilder => {
        this.rollNo = rollNo;
        return this;
    }

    setFatherName = (fatherName: string): StudentBuilder => {
        this.fatherName = fatherName;
        return this;
    }

    setMotherName = (motherName: string): StudentBuilder => {
        this.motherName = motherName;
        return this;
    }

    abstract setSubjects() 

    setName = (name: string): StudentBuilder => {
        this.name = name;
        return this;
    }

    setAge = (age: number): StudentBuilder => {
        this.age = age;
        return this;
    }

    build = (): Student => {
        return new Student(this);
    }

}

export default StudentBuilder;