/* 

Trong lập trình hướng đối tượng, abstract method và method (hoặc còn gọi là concrete method) là hai khái niệm quan trọng.

Abstract method (phương thức trừu tượng):
Là một phương thức trong một lớp mà không có phần thân (body).
Nó chỉ định các phương thức mà các lớp con (subclass) cần phải triển khai (implement).
Được khai báo trong một lớp abstract.
Các lớp con phải cung cấp một triển khai cụ thể cho abstract method này.

Method (phương thức):
Là một phần của một lớp có thể có phần thân (body).
Được sử dụng để thực hiện một công việc cụ thể.
Các method có thể được gọi từ các đối tượng của lớp đó.
*/
// Định nghĩa một interface với một abstract method
interface Shape {
    draw(): void;
}

// Triển khai interface và cung cấp phần thân cho abstract method
class Circle implements Shape {
    draw(): void {
        console.log("Drawing a circle");
    }
}

class Rectangle implements Shape {
    draw(): void {
        console.log("Drawing a rectangle");
    }
}

// Sử dụng các lớp đã triển khai
const circle = new Circle();
circle.draw(); // Output: Drawing a circle

const rectangle = new Rectangle();
rectangle.draw(); // Output: Drawing a rectangle
