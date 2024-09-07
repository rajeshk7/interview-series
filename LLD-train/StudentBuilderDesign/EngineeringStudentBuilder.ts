import StudentBuilder from "./StudentBuilder";

class EngineeringStudentBuilder extends StudentBuilder {
    setSubjects = (): EngineeringStudentBuilder => {
        this.subjects = ['Data Structures', 'Algorithms', 'Operating Systems', 'Computer Networks', 'Database Management Systems'];
        return this;
    }
}

export default EngineeringStudentBuilder;