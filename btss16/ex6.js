"use strict";
/*
Abstract Class (Lớp trừu tượng):
Một abstract class có thể chứa cả các method trừu tượng (abstract methods) và các method cụ thể (concrete methods) với hoặc không có phần thân.
Các lớp con kế thừa từ abstract class phải triển khai (implement) tất cả các abstract methods được định nghĩa trong abstract class.
Một lớp con chỉ có thể kế thừa từ một abstract class duy nhất.
 

*/
class Shape {
    calculateArea() {
        console.log("Calculating area");
    }
}
class Circle extends Shape {
    draw() {
        console.log("Drawing a circle");
    }
}
const circle = new Circle();
circle.draw(); // Output: Drawing a circle
circle.calculateArea(); // Output: Calculating area
class Circle {
    draw() {
        console.log("Drawing a circle");
    }
    fill(color) {
        console.log(`Filling circle with ${color} color`);
    }
}
const circle = new Circle();
circle.draw(); // Output: Drawing a circle
circle.fill("blue"); // Output: Filling circle with blue color
