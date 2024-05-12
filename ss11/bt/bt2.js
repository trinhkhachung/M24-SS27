"use strict";
class Student {
    constructor(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
}
const student1 = new Student(1, 15, "a@gmail.com");
const student2 = new Student(3, 15, "a@gmail.com");
const student3 = new Student(2, 15, "a@gmail.com");
let students = [student1, student2, student3];
console.log(students);
