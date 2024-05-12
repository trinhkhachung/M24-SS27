"use strict";
class Employee {
    constructor(name) {
        this.name = name;
    }
}
//cách khoiwt tạo đối tượng abstraction
//thêm từ khóa abstrac vào đầu class
//let emp1 = new Employee("huwng")
//emp1 đc gọi la 1 intace của class Eployee
//đối vs abstrac 
class Student extends Employee {
}
class Person {
    constructor(name) {
        this.name = name;
    }
    getfullname() {
    }
}
class Retangl extends Shape {
}
