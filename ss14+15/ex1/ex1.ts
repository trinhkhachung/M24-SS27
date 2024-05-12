class Student {
    id: number;
    name: string;
    enrolledCourses: Course[];
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.enrolledCourses = [];
    }
    enroll(course: Course): void {
        this.enrolledCourses.push(course);
    }
}

class Instructor {
    id: number;
    name: string;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
    createCourse(title: string): Course {
        return new Course(title, this);
    }
    createLesson(title: string): Lesson {
        return new Lesson(title);
    }
    createAssignment(title: string): Assignment {
        return new Assignment(title);
    }
    createAssessment(title: string): Assessment {
        return new Assessment(title);
    }
}

class Course {
    title: string;
    instructor: Instructor;
    lessons: Lesson[];
    assessments: Assessment[];

    constructor(title: string, instructor: Instructor) {
        this.title = title;
        this.instructor = instructor;
        this.lessons = [];
        this.assessments = [];
    }
    addLesson(lesson: Lesson): void {
        this.lessons.push(lesson);
    }
    addAssessment(assessment: Assessment): void {
        this.assessments.push(assessment);
    }
}

class Lesson {
    title: string;
    assignments: Assignment[];
    constructor(title: string) {
        this.title = title;
        this.assignments = [];
    }
    addAssignment(assignment: Assignment): void {
        this.assignments.push(assignment);
    }
}

class Assignment {
    title: string;
    constructor(title: string) {
        this.title = title;
    }
}

class Assessment {
    title: string;
    constructor(title: string) {
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
this.id
