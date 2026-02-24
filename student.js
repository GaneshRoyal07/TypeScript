var StudentManager = /** @class */ (function () {
    function StudentManager() {
        this.students = [];
    }
    StudentManager.prototype.addStudent = function (student) {
        this.students.push(student);
        console.log("Student added successfully!");
    };
    StudentManager.prototype.viewStudents = function () {
        console.log("Student List:");
        console.log(this.students);
    };
    StudentManager.prototype.deleteStudent = function (id) {
        this.students = this.students.filter(function (student) { return student.id !== id; });
        console.log("Student deleted successfully!");
    };
    return StudentManager;
}());
var manager = new StudentManager();
manager.addStudent({ id: 1, name: "Ganesh", age: 22, course: "BSc" });
manager.addStudent({ id: 2, name: "Ravi", age: 21, course: "BCom" });
manager.viewStudents();
manager.deleteStudent(1);
manager.viewStudents();
