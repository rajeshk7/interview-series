import Prototype from "./Prototype";

class Student implements Prototype {
    age: number;
    name: string;
    rollNumber: number;

    constructor(age: number, name: string, rollNumber: number) {
        this.age = age;
        this.name = name;
        this.rollNumber = rollNumber;
    }

    clone(): Prototype {
        return new Student(this.age, this.name, this.rollNumber);
    }
}

export default Student;