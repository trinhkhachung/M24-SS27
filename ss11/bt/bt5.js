"use strict";
class Department {
    constructor(id, name, employee) {
        this.id = id;
        this.name = name;
        this.employees = employee;
    }
    decribe() {
        console.log(this.id, this.name);
    }
}
const department = new Department(1, "hi", []);
department.decribe();
