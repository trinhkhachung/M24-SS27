"use strict";
class Person {
    constructor(name = "Hung") {
        this.name = name;
    }
    displayInfo() {
        console.log(this);
    }
}
class Student extends Person {
    constructor(name) {
        super(name);
    }
}
const studentx = new Student("An");
studentx.displayInfo();
