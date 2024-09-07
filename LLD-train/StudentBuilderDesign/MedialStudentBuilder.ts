import StudentBuilder from "./StudentBuilder";

class MedicalStudentBuilder extends StudentBuilder {
    setSubjects = (): MedicalStudentBuilder => {
        this.subjects = ['Anatomy', 'Physiology', 'Biochemistry', 'Microbiology', 'Pathology'];
        return this;
    }
}

export default MedicalStudentBuilder;