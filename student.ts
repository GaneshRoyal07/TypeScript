interface Student {
    id: number;
    name: string;
    age: number;
    course: string;
}

class StudentManager {
    private students: Student[] = [];

    addStudent(student: Student): void {
        this.students.push(student);
        console.log("Student added successfully!");
    }

    viewStudents(): void {
        console.log("Student List:");
        console.log(this.students);
    }

    deleteStudent(id: number): void {
        this.students = this.students.filter(student => student.id !== id);
        console.log("Student deleted successfully!");
    }
}

const manager = new StudentManager();

manager.addStudent({ id: 1, name: "Ganesh", age: 22, course: "BSc" });
manager.addStudent({ id: 2, name: "Sasi", age: 23, course: "BTech" });

manager.viewStudents();
manager.deleteStudent(2);
manager.viewStudents();