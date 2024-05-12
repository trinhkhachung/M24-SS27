"use strict";
class Circles {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
class Rectangles {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
let circles = new Circles(5);
console.log("Circle Area:", circles.calculateArea());
console.log("Circle Perimeter:", circles.calculatePerimeter());
let Rectangles = new Rectangles(4, 6);
console.log("Rectangle Area:", Rectangles.calculateArea());
console.log("Rectangle Perimeter:", Rectangles.calculatePerimeter());
