"use strict";
class Shape {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Rectangle extends Shape {
    constructor(width, height, name) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize() {
        return `dài: ${this.height} , rộng: ${this.width}`;
    }
}
let rectan = new Rectangle("Hình chữ nhật", 2, 5);
console.log(rectan.getName());
console.log(rectan.getSize());
