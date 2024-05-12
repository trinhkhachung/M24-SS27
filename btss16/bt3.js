"use strict";
// Triển khai interface và cung cấp phần thân cho abstract method
class Circle {
    draw() {
        console.log("Drawing a circle");
    }
}
class Rectangle {
    draw() {
        console.log("Drawing a rectangle");
    }
}
// Sử dụng các lớp đã triển khai
const circle = new Circle();
circle.draw(); // Output: Drawing a circle
const rectangle = new Rectangle();
rectangle.draw(); // Output: Drawing a rectangle
