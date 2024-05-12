/*
Abstract Class (Lớp trừu tượng):
Một abstract class có thể chứa cả các method trừu tượng (abstract methods) và các method cụ thể (concrete methods) với hoặc không có phần thân.
Các lớp con kế thừa từ abstract class phải triển khai (implement) tất cả các abstract methods được định nghĩa trong abstract class.
Một lớp con chỉ có thể kế thừa từ một abstract class duy nhất.
 

*/
abstract class Shape {
    abstract draw(): void;

    calculateArea(): void {
        console.log("Calculating area");
    }
}

class Circle extends Shape {
    draw(): void {
        console.log("Drawing a circle");
    }
}

const circle = new Circle();
circle.draw(); // Output: Drawing a circle
circle.calculateArea(); // Output: Calculating area
/* 
Interface (Giao diện):
Một interface chỉ chứa các abstract methods và không có phần thân (body) cho các methods đó.
Các lớp có thể triển khai (implement) nhiều interface.
Không có dữ liệu nào được định nghĩa trong interface, chỉ có các method.
*/
interface Shape {
    draw(): void;
}

interface Color {
    fill(color: string): void;
}

class Circle implements Shape, Color {
    draw(): void {
        console.log("Drawing a circle");
    }

    fill(color: string): void {
        console.log(`Filling circle with ${color} color`);
    }
}

const circle = new Circle();
circle.draw(); // Output: Drawing a circle
circle.fill("blue"); // Output: Filling circle with blue color
