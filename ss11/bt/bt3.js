"use strict";
class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(this);
    }
}
let employee = new Employee("Hoa", "NKC", 8412132313);
employee.printInfo();
