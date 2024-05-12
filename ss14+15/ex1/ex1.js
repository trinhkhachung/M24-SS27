"use strict";
class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.enrolledCourses = [];
    }
    enroll(course) {
        this.enrolledCourses.push(course);
    }
}
class Instructor {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    createCourse(title) {
        return new Course(title, this);
    }
    createLesson(title) {
        return new Lesson(title);
    }
    createAssignment(title) {
        return new Assignment(title);
    }
    createAssessment(title) {
        return new Assessment(title);
    }
}
class Course {
    constructor(title, instructor) {
        this.title = title;
        this.instructor = instructor;
        this.lessons = [];
        this.assessments = [];
    }
    addLesson(lesson) {
        this.lessons.push(lesson);
    }
    addAssessment(assessment) {
        this.assessments.push(assessment);
    }
}
class Lesson {
    constructor(title) {
        this.title = title;
        this.assignments = [];
    }
    addAssignment(assignment) {
        this.assignments.push(assignment);
    }
}
class Assignment {
    constructor(title) {
        this.title = title;
    }
}
class Assessment {
    constructor(title) {
        this.title = title;
    }
}
const instructor = new Instructor(1, "John Doe");
const course = instructor.createCourse("Python Programming");
const lesson1 = instructor.createLesson("Introduction to Python");
const assignment1 = instructor.createAssignment("Assignment 1");
lesson1.addAssignment(assignment1);
course.addLesson(lesson1);
const assessment1 = instructor.createAssessment("Final Exam");
course.addAssessment(assessment1);
const student = new Student(101, "Alice");
student.enroll(course);
console.log(student.enrolledCourses[0].title);
this.id;
