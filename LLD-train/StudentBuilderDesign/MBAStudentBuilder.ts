import StudentBuilder from "./StudentBuilder";

class MBAStudentBuilder extends StudentBuilder {
    setSubjects = (): MBAStudentBuilder => {
        this.subjects = ['Marketing', 'Finance', 'Human Resource Management', 'Operations Management', 'Business Analytics'];
        return this;
    }
}

export default MBAStudentBuilder;