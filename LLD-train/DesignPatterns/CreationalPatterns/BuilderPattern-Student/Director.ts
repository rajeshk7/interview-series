import EngineeringStudentBuilder from './EngineeringStudentBuilder';
import MBAStudentBuilder from './MBAStudentBuilder';
import MedicalStudentBuilder from './MedialStudentBuilder';
import Student from './Student';
import StudentBuilder from './StudentBuilder';

class Director {
    studentBuilder: StudentBuilder;

    constructor(studentBuilder: StudentBuilder) {
        this.studentBuilder = studentBuilder;
    }

    createStudent(): Student {
        if(this.studentBuilder instanceof MBAStudentBuilder)
            return this.createMBAStudent()
        else if(this.studentBuilder instanceof EngineeringStudentBuilder)
            return this.createEngineeringStudent()
        else
            return this.createMedicalStudent()
    }

    createMBAStudent(): Student {
        return this.studentBuilder.setRollNo(1).setAge(28).setFatherName('Mr. X').setMotherName('Mrs. X').setSubjects().setName('Raj').build()
    }

    createEngineeringStudent(): Student {
        return this.studentBuilder.setRollNo(2).setAge(20).setFatherName('Mr. X').setMotherName('Mrs. X').setSubjects().setName('Rahul').build()
    }

    createMedicalStudent(): Student {
        return this.studentBuilder.setRollNo(3).setAge(26).setFatherName('Mr. X').setMotherName('Mrs. X').setSubjects().setName('Simran').build()
    }

}

export default Director;